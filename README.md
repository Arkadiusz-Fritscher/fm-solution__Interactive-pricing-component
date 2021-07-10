# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![Mobile view](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- JavaScript
- SASS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Tried to write **well-structured** and **accessibility-friendly** code.

Styling input elements was something new for me. Through the project, I have
learned a lot of new things about input elements. As a Tailwind fan, I haven't
worked with SASS for some time. I learned some new things when it comes to
splitting sass files or mixins.

```js
const init = function () {
  setSliderAttributes();
  setPrice;

  // Slider events
  elements.slider.addEventListener("input", () => {
    setSliderAttributes();
    setSliderColor();
    setPrice();
  });

  // Checkbox events
  elements.checkbox.addEventListener("change", () => {
    calcPriceViews();
    setPrice();
  });
};
```

### Continued development

I will deal with accessibility even further

## Author

- Website - [Fritscher.dev](https://www.fritscher.dev)
- Frontend Mentor - [@Arkadiusz-Fritscher](https://www.frontendmentor.io/profile/Arkadiusz-Fritscher)
- Twitter - [@Fritscher_dev](https://www.twitter.com/fritscher_dev)
