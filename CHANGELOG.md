# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.4](https://github.com/ryanwalters/snap-slider/compare/v0.3.3...v0.3.4) (2020-04-24)


### Features

* allow setting buttons to null ([837ab70](https://github.com/ryanwalters/snap-slider/commit/837ab7044b39402275d53c4b0080383e083a1da7))


### Bug Fixes

* set .rw-slide to display: inline-block ([747a669](https://github.com/ryanwalters/snap-slider/commit/747a66964f9cb0e8e7ad1f9fdf12458fd07ed141))

### [0.3.3](https://github.com/ryanwalters/snap-slider/compare/v0.3.2...v0.3.3) (2020-04-22)


### Features

* add scrollRatio option ([3aae839](https://github.com/ryanwalters/snap-slider/commit/3aae839bb0968a9edeee91d0cfe39c62e28c1ecb))

### [0.3.2](https://github.com/ryanwalters/snap-slider/compare/v0.3.1...v0.3.2) (2020-04-21)


### Bug Fixes

* lower threshold to 0.94 ([1d52644](https://github.com/ryanwalters/snap-slider/commit/1d52644ef38e13f1c93449de150f2678ccf6d5f0))

### [0.3.1](https://github.com/ryanwalters/snap-slider/compare/v0.3.0...v0.3.1) (2020-04-21)


### Bug Fixes

* lower IntersectionObserver threshold to fix buttons failing to disable ([566244c](https://github.com/ryanwalters/snap-slider/commit/566244c866b8f017d4054b303c8639c1b9bc8b9b))
* remove console.log ([6804ce2](https://github.com/ryanwalters/snap-slider/commit/6804ce29c804e9251802f70b4b366777068c9967))

## [0.3.0](https://github.com/ryanwalters/snap-slider/compare/v0.2.3...v0.3.0) (2020-04-13)


### ⚠ BREAKING CHANGES

* Any implementations relying on an `align` value other than `start` will no longer be aligned properly. Please manually set this CSS property for now. It's possible this option will return sometime before v1.0.0.

### Bug Fixes

* manually calculate isIntersecting to fix buggy behavior ([026151b](https://github.com/ryanwalters/snap-slider/commit/026151beee6b79d25b21eea236c0ac26ce9088b7))


* remove align option ([7a343a4](https://github.com/ryanwalters/snap-slider/commit/7a343a4606272a19dafa5e79df2e75f7fa2d496e))

### [0.2.3](https://github.com/ryanwalters/snap-slider/compare/v0.2.2...v0.2.3) (2020-04-07)


### Features

* add disabled button status classes to $slider ([393e01f](https://github.com/ryanwalters/snap-slider/commit/393e01f5dea76641e538cf7f25f408898af83158))


### Bug Fixes

* bump prettier from 1.19.1 to 2.0.4 ([523bd30](https://github.com/ryanwalters/snap-slider/commit/523bd304e7e6674bfaa0073f4623987e3f2d180e))

### [0.2.2](https://github.com/ryanwalters/snap-slider/compare/v0.2.1...v0.2.2) (2020-02-24)

### Bug Fixes

- Reset white-space of slides ([5e66464](https://github.com/ryanwalters/snap-slider/commit/5e66464402433747a496780b9689a5f2e0db4ec0))
