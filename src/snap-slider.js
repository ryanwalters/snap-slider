export default class SnapSlider {
  /**
   * @constructor
   * @param {Element} $slider
   * @param {Element} [$buttonPrev]
   * @param {Element} [$buttonNext]
   * @param {string} [align]        Can be one of: start (default), center, end
   */

  constructor({
    $slider,
    $buttonPrev,
    $buttonNext,
    align = 'start',
  }) {
    this.$slider = $slider;
    this.$track = document.createElement('div');
    this.$buttonNext = $buttonNext;
    this.$buttonPrev = $buttonPrev;
    
    // --- Assemble the slider

    // Apply classes

    this.$slider.classList.add('rw-slider');
    this.$track.classList.add('rw-track');

    for (const $slide of this.$slider.children) {
      $slide.classList.add('rw-slide');
    }

    // Move slides into track

    this.$track.append(...this.$slider.children);

    // Append track to slider

    this.$slider.append(this.$track);

    // Build and append arrows if existing arrows weren't passed

    if (!$buttonPrev) {
      this.$buttonPrev = SnapSlider.createButton('Previous');

      this.$slider.append(this.$buttonPrev);
    }

    if (!$buttonNext) {
      this.$buttonNext = SnapSlider.createButton('Next');

      this.$slider.append(this.$buttonNext);
    }

    // --- Listeners and observers

    this.attachButtonListeners();
    this.addObservers();
  }

  /**
   * Attach click event listeners for the Previous and Next buttons
   */

  attachButtonListeners() {
    this.$buttonPrev.addEventListener('click', () => {
      this.$track.scrollBy({
        left: -this.$track.clientWidth,
        behavior: 'smooth',
      });
    });

    this.$buttonNext.addEventListener('click', () => {
      console.log(this.$track.clientWidth);
      this.$track.scrollBy({
        left: this.$track.clientWidth,
        behavior: 'smooth',
      });
    });
  }

  /**
   * Observe various things...
   */

  addObservers() {
    // Disable Previous button when the first slide is 100% in view
    
    this.prevButtonObserver = new IntersectionObserver(([entry]) => {
      this.$buttonPrev.disabled = entry.isIntersecting;
      this.$buttonPrev.classList.toggle('rw-disabled', entry.isIntersecting);
    }, {
      root: this.$track,
      threshold: 1,
    });

    this.prevButtonObserver.observe(this.$track.firstElementChild);

    // Disable the Next button when the last slide is 100% in view

    this.nextButtonObserver = new IntersectionObserver(([entry]) => {
      this.$buttonNext.disabled = entry.isIntersecting;
      this.$buttonNext.classList.toggle('rw-disabled', entry.isIntersecting);
    }, {
      root: this.$track,
      threshold: 1,
    });

    this.nextButtonObserver.observe(this.$track.lastElementChild);

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
