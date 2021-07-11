"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const priceList = [
    { views: 10000, price: 8 },
    { views: 50000, price: 12 },
    { views: 100000, price: 16 },
    { views: 500000, price: 24 },
    { views: 1000000, price: 36 },
  ];
  const data = {
    minRange: null,
    maxRange: null,
    sliderValue: null,
    isChecked: false,
    price: null,
    views: null,
  };

  /* Dom Elements */
  const elements = {
    page: document.querySelector("body"),
    checkbox: document.querySelector("[type=checkbox]"),
    slider: document.querySelector("[type=range]"),
    pageviews: document.querySelector("#views"),
    price: document.querySelector("#price"),
  };

  function abbreviateViews(value) {
    const stringValue = value.toString();
    const valueLength = stringValue.length - 1;
    let shorten = "";

    if (stringValue >= 1000) {
      switch (valueLength) {
        case 4:
          shorten = stringValue.substring(0, 2) + "k";
          break;
        case 5:
          shorten = stringValue.substring(0, 3) + "k";
          break;
        case 6:
          shorten = stringValue.substring(0, 1) + "m";
          break;
        default:
          shorten = stringValue.substring(0, 1) + "b";
          break;
      }
    }

    return shorten;
  }

  const setSliderAttributes = function () {
    const slider = elements.slider;
    slider.setAttribute("aria-valuemin", 1);
    slider.setAttribute("aria-valuemax", priceList.length);
    slider.setAttribute("min", 1);
    slider.setAttribute("max", priceList.length);
    slider.setAttribute("step", 1);
    data.maxRange = slider.attributes.max.value;
    data.minRange = slider.attributes.min.value;
    data.sliderValue = slider.value;
  };

  const checkDiscount = function () {
    const isChecked = elements.checkbox.checked;
    data.isChecked = isChecked;
    return isChecked;
  };

  const checkDiscountPrice = function (originalPrice) {
    const isDiscount = checkDiscount();
    const discountPercent = 25;
    const discountPrice =
      originalPrice - ((originalPrice * discountPercent) / 100).toFixed(2);
    return isDiscount ? discountPrice : originalPrice;
  };

  const setSliderColor = function () {
    const { minRange, maxRange, sliderValue } = data;
    const sliderColor = "hsl(174, 77%, 80%)";
    const sliderBgColor = "hsl(224, 65%, 95%)";
    const sliderPercent =
      ((sliderValue - minRange) / (maxRange - minRange)) * 100;
    elements.slider.style.background = `linear-gradient(to right, ${sliderColor} 0%, ${sliderColor} ${sliderPercent}%,${sliderBgColor} ${sliderPercent}%, ${sliderBgColor} 100%)`;
  };

  const calcPriceViews = function () {
    const sliderValue = data.sliderValue;
    const { price, views } = priceList[sliderValue - 1];
    const PRICE = checkDiscountPrice(price).toFixed(2);
    data.price = PRICE;
    data.views = views;
    return { PRICE, views };
  };

  const setPrice = function () {
    const sliderValue = data.sliderValue;
    const { PRICE, views } = calcPriceViews();
    elements.slider.setAttribute("aria-valuenow", sliderValue);
    elements.slider.setAttribute("value", sliderValue);
    elements.pageviews.innerHTML = abbreviateViews(views);
    elements.price.innerHTML = PRICE;
  };

  const init = function () {
    setSliderAttributes();
    setPrice();
    setSliderColor();

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

  init();
});
