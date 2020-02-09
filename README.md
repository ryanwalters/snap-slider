# snap-slider

> Lightweight, easily customizable slider. 665 bytes gzipped.

### Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE |[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| :---: | :---: | :---: | :---: | :---: |
| None | 76+ | 68+ | 69+ | 11+ (partial) |

<small>Partial Safari support refers to the `scrollBy` method's `ScrollToOptions` parameter not being supported. This prevents the smooth scrolling behavior. The [smoothscroll-polyfill](https://www.npmjs.com/package/smoothscroll-polyfill) can be used until Safari has proper support.</small>

### Install

```
$ npm install snap-slider
```

### Usage

```javascript
import SnapSlider from 'snap-slider';
import 'snap-slider/src/snap-slider.css';

const { $track } = new SnapSlider({ 
  $slider: document.querySelector('#your-slider'),
  $buttonPrev: document.querySelector('.custom-previous-button'), // Optional
  $buttonNext: document.querySelector('.custom-next-button'), // Optional
  align: 'center', // Optional, must be one of: start (default), center, end
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

Sample markup for above example:
```html
<div id="your-slider">
    <img src="//placehold.it/300x300" alt="fancy image" />
    <img src="//placehold.it/300x300" alt="fancy image" />
    <img src="//placehold.it/300x300" alt="fancy image" />
    <img src="//placehold.it/300x300" alt="fancy image" />
    <img src="//placehold.it/300x300" alt="fancy image" />
</div>
```

The children of `#your-slider` can be anything (e.g. `div`, `picture`, whatever), not only `img` elements.