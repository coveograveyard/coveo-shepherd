# coveo-shepherd

Coveo's shepherd theme


[![Build Status](https://travis-ci.org/coveo/coveo-shepherd.svg?branch=master)](https://travis-ci.org/coveo/coveo-shepherd)
[![devDependency Status](https://david-dm.org/coveo/coveo-shepherd/dev-status.svg)](https://david-dm.org/coveo/coveo-shepherd#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub release](https://img.shields.io/github/release/coveo/coveo-shepherd.svg)](https://github.com/coveo/coveo-shepherd/releases/)
[![version](https://img.shields.io/npm/v/coveo-shepherd.svg)](https://www.npmjs.org/package/coveo-shepherd)
[![license](https://img.shields.io/github/license/coveo/coveo-shepherd.svg)](https://github.com/coveo/coveo-shepherd/blob/master/LICENSE)


## Dependency

- [shepherd](https://github.com/HubSpot/shepherd) (tested with 1.8.0)

## Usage

Download coveo-shepherd with `npm`

```sh
  npm install --save coveo-shepherd
```

Insert the css in your HTML header

```html
  ...
  <link rel="stylesheet" href="../path_to/../shepherd-theme-coveo.min.css">
  ...
```

Initialize tether-shepherd with the coveo theme

```js
  var tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-coveo', <-- the theme
      scrollTo: true,
      showCancelLink: true
    }
  });
  ...

  tour.addStep('Testing the next', {
    title: 'Example Shepherd',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet quam et ante aliquam, et sagittis ipsum sagittis. Nulla sed luctus arcu.<br/><br/>Donec tincidunt elementum euismod. Praesent pulvinar aliquam dui, sit amet tempus est convallis vel. Quisque consectetur ullamcorper tincidunt. Integer enim urna, facilisis vel imperdiet vitae, maximus quis nisi.",
    attachTo: 'code.language-css bottom',
    buttons: [{
      text: 'Prev',
      action: tour.back
    }, {
      classes: 'shepherd-button-primary', <-- primary button mod
      text: 'Next',
      action: tour.next
    }]
  });
  ...
```

## Shepherd

Shepherd is a nice javascript plugin to help guide your users through a tour of your app.
Take a look at their [API](http://github.hubspot.com/shepherd/).

## Screenshots

- Example with a large content

![large](https://raw.github.com/coveo/coveo-shepherd/screenshots/images/large.png)

- Example with a medium content

![medium](https://raw.github.com/coveo/coveo-shepherd/screenshots/images/medium.png)

- Example with a small content and no title

![small](https://raw.github.com/coveo/coveo-shepherd/screenshots/images/small.png)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](http://forthebadge.com)
