# snap-slider

![minified + gzip size](https://flat.badgen.net/bundlephobia/minzip/snap-slider)

> Lightweight, easily customizable slider.

### Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE |[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| :---: | :---: | :---: | :---: | :---: |
| None | 76+ | 68+ | 69+ | 11+ (partial*) |

### Install

```
$ npm install snap-slider
```

### Demo

https://ryanwalters.github.io/snap-slider/

### Options

*Options marked with an asterisk (\*) are required*

| Option Name   | Type      | Default    | Description |
| ------------- | --------- | ---------- | ----------- |
| `$slider`\*     | `Element` | *none*     | The element containing the slides. |
| `$buttonPrev` | `Element` | `<button>` | Custom previous button. |
| `$buttonNext` | `Element` | `<button>` | Custom next button. |
| `scrollRatio` | `number`  | `1`        | The percentage of the track that should be scrolled. Example: a value of `0.75` will scroll 75% of the width of the container. |

### Usage

```html
<button class="custom-previous-button">
    <i class="material-icons">keyboard_arrow_left</i>
</button>
<div id="your-slider">
    <img src="//placehold.it/300x300" alt="fancy image" />
    <img src="//placehold.it/300x300" alt="fancy image" />
    <img src="//placehold.it/300x300" alt="fancy image" />
    <img src="//placehold.it/300x300" alt="fancy image" />
    <img src="//placehold.it/300x300" alt="fancy image" />
</div>
<button class="custom-next-button">
    <i class="material-icons">keyboard_arrow_right</i>
</button>
```

```javascript
import SnapSlider from 'snap-slider';
import 'snap-slider/src/snap-slider.css';

const { $track } = new SnapSlider({ 
  $slider: document.querySelector('#your-slider'),
  $buttonPrev: document.querySelector('.custom-previous-button'), // Optional
  $buttonNext: document.querySelector('.custom-next-button'), // Optional
  scrollRatio: 0.5, // Optional
});

// $track is an HTMLElement, so you have access to all the standard JS methods and properties 

// Examples:
// Append 

$track.append(document.querySelector('.new-slide')); // Single slide
$track.append(...document.querySelectorAll('.more-slides')); // Multiple slides

// Prepend

$track.prepend(document.querySelector('.new-slide')); // Single slide
$track.prepend(...document.querySelectorAll('.more-slides')); // Multiple slides
```


The children of `#your-slider` can be anything (e.g. `div`, `picture`, whatever), not only `img` elements.

*_Partial Safari support refers to the scrollBy method's ScrollToOptions parameter not being supported. This prevents the smooth scrolling behavior. The smoothscroll-polyfill can be used until Safari has proper support._
