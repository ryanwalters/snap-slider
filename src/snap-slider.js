export default class SnapSlider {
  constructor($slider) {
    this.$slider = $slider;
    this.$slides = $slider.children;
    this.$track = document.createElement('div');

    // Apply classes

    this.$slider.classList.add('rw-slider');
    this.$track.classList.add('rw-track');

    for (const $slide of this.$slides) {
      $slide.classList.add('rw-slide');
    }

    // Move slides into track

    this.$track.append(...this.$slides);

    // Append track to slider

    this.$slider.append(this.$track);

    // Get scroll widths

    const scrollAmount = this.$track.clientWidth;
    const trackWidth = this.$track.scrollWidth;

    // Create arrows

    this.$buttonPrev = document.createElement('button');
    this.$buttonNext = document.createElement('button');

    this.$buttonPrev.innerText = 'Previous';
    this.$buttonNext.innerText = 'Next';

    // Append arrows

    this.$slider.append(this.$buttonPrev, this.$buttonNext);

    // Attach event listeners

    this.$buttonPrev.addEventListener('click', () => {
      this.$track.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    });

    this.$buttonNext.addEventListener('click', () => {
      this.$track.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    });
  }
}
