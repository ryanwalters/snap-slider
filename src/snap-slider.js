export class SnapSlider {
  /**
   * @constructor
   * @param {Element} $slider       The parent element containing the slides
   * @param {Element} [$buttonPrev] Custom previous button
   * @param {Element} [$buttonNext] Custom next button
   * @param {number}  [scrollRatio] The percentage of the track that should be scrolled; 0: 0%, 0.5: 50%, 1: 100%; default: 1
   */

  constructor({
                $slider,
                $buttonPrev,
                $buttonNext,
                scrollRatio = 1,
              }) {
    this.$slider = $slider;
    this.$track = document.createElement('div');
    this.$buttonNext = $buttonNext;
    this.$buttonPrev = $buttonPrev;
    this.scrollRatio = scrollRatio;

    this.addMutationObservers();

    // --- Assemble the slider

    // Apply classes

    this.$slider.classList.add('rw-slider');
    this.$track.classList.add('rw-track');

    // Move slides into track

    this.$track.append(...this.$slider.children);

    // Append track to slider

    this.$slider.append(this.$track);

    // Build and append arrows if existing arrows weren't passed

    if (typeof $buttonPrev === 'undefined') {
      this.$buttonPrev = SnapSlider.createButton('Previous');

      this.$slider.append(this.$buttonPrev);
    }

    if (typeof $buttonNext === 'undefined') {
      this.$buttonNext = SnapSlider.createButton('Next');

      this.$slider.append(this.$buttonNext);
    }

    // --- Listeners and observers

    this.attachButtonListeners();
    this.addIntersectionObservers();
  }

  /**
   * Attach click event listeners for the Previous and Next buttons
   */

  attachButtonListeners() {
    if (this.$buttonPrev) {
      this.$buttonPrev.addEventListener('click', () => {
        this.$track.scrollBy({
          left: -this.$track.clientWidth * this.scrollRatio,
          behavior: 'smooth',
        });
      });
    }

    if (this.$buttonNext) {
      this.$buttonNext.addEventListener('click', () => {
        this.$track.scrollBy({
          left: this.$track.clientWidth * this.scrollRatio,
          behavior: 'smooth',
        });
      });
    }
  }

  /**
   * MutationObservers on the track
   */

  addMutationObservers() {
    // When adding or removing elements from the track...

    this.mutationObserver = new MutationObserver(([entry]) => {
      // ...add the .rw-slide class to each new node

      entry.addedNodes.forEach(node => node.classList.add('rw-slide'));

      // ...re-observe the first and last elements

      this.prevButtonObserver.disconnect();
      this.prevButtonObserver.observe(this.$track.firstElementChild);

      this.nextButtonObserver.disconnect();
      this.nextButtonObserver.observe(this.$track.lastElementChild);
    });

    this.mutationObserver.observe(this.$track, { childList: true });
  }

  /**
   * IntersectionObservers on buttons
   */

  addIntersectionObservers() {
    // Threshold needs to be slightly below 1, otherwise buttons will sometimes fail to disable

    const threshold = 0.94;

    // Disable Previous button when the first slide is 100% in view

    this.prevButtonObserver = new IntersectionObserver(([{ intersectionRatio }]) => {
      const isIntersecting = intersectionRatio >= threshold;

      if (this.$buttonPrev) {
        this.$buttonPrev.disabled = isIntersecting;
        this.$buttonPrev.classList.toggle('rw-disabled', isIntersecting);
      }

      this.$slider.classList.toggle('rw-prev-disabled', isIntersecting);
    }, {
      root: this.$track,
      threshold,
    });

    this.prevButtonObserver.observe(this.$track.firstElementChild);

    // Disable the Next button when the last slide is 100% in view

    this.nextButtonObserver = new IntersectionObserver(([{ intersectionRatio }]) => {
      const isIntersecting = intersectionRatio >= threshold;

      if (this.$buttonNext) {
        this.$buttonNext.disabled = isIntersecting;
        this.$buttonNext.classList.toggle('rw-disabled', isIntersecting);
      }

      this.$slider.classList.toggle('rw-next-disabled', isIntersecting);
    }, {
      root: this.$track,
      threshold,
    });

    this.nextButtonObserver.observe(this.$track.lastElementChild);
  }

  /**
   * Disconnect all observers
   */

  destroy() {
    this.prevButtonObserver.disconnect();
    this.nextButtonObserver.disconnect();
    this.mutationObserver.disconnect();
  }

  // Static methods

  /**
   * Create a button with given text
   * @param {string} text
   * @returns {HTMLButtonElement}
   */

  static createButton(text) {
    const $button = document.createElement('button');

    $button.innerText = text;

    return $button;
  }
}
