const inputValue = document.querySelector('input');

//! Length
const meterLeft = document.querySelector('#id-meter-left');
const feetRight = document.querySelector('#id-feet-right');
const feetLeft = document.querySelector('#id-feet-left');
const meterRight = document.querySelector('#id-meter-right');

//! Volume
const literLeft = document.querySelector('#id-liter-left');
const gallonRight = document.querySelector('#id-gallon-right');
const gallonLeft = document.querySelector('#id-gallon-left');
const literRight = document.querySelector('#id-liter-right');

//! Weight
const kiloLeft = document.querySelector('#id-kilo-left');
const poundRight = document.querySelector('#id-pound-right');
const poundLeft = document.querySelector('#id-pound-left');
const kiloRight = document.querySelector('#id-kilo-right');

//! Temperature
const celsiusLeft = document.querySelector('#id-celsius-left');
const fahrenheitRight = document.querySelector('#id-fahrenheit-right');
const fahrenheitLeft = document.querySelector('#id-fahrenheit-left');
const celsiusRight = document.querySelector('#id-celsius-right');

inputValue.addEventListener('input', () => {
  if (!inputValue.value == '') {
    //* Converted LENGTH
    meterLeft.textContent = inputValue.value;
    feetLeft.textContent = inputValue.value;
    meterRight.textContent = Math.round((inputValue.value * 3.28084) * 100) / 100;
    feetRight.textContent = Math.round((inputValue.value * 0.3048) * 100) / 100;

    //* Converted VOLUME
    literLeft.textContent = inputValue.value;
    gallonLeft.textContent = inputValue.value;
    gallonRight.textContent = Math.round((inputValue.value * 0.264172) * 100) / 100;
    literRight.textContent = Math.round((inputValue.value * 3.785) * 100) / 100;

    //* Converted WEIGHT
    kiloLeft.textContent = inputValue.value;
    poundLeft.textContent = inputValue.value;
    poundRight.textContent = Math.round((inputValue.value * 2.20462) * 100) / 100;
    kiloRight.textContent = Math.round((inputValue.value * 0.453592) * 100) / 100;

    //* Converted TEMPERATURE
    celsiusLeft.textContent = inputValue.value;
    fahrenheitLeft.textContent = inputValue.value;
    fahrenheitRight.textContent = Math.round(((inputValue.value * 9 / 5) + 32) * 100) / 100;
    celsiusRight.textContent = Math.round(((inputValue.value - 32) * 5 / 9) * 100) / 100;
  } else {
    //* Converted LENGTH
    meterLeft.textContent = 0;
    feetLeft.textContent = 0;
    meterRight.textContent = 0;
    feetRight.textContent = 0;

    //* Converted VOLUME
    literLeft.textContent = 0;
    gallonLeft.textContent = 0;
    gallonRight.textContent = 0;
    literRight.textContent = 0;

    //* Converted WEIGHT
    kiloLeft.textContent = 0;
    poundLeft.textContent = 0;
    poundRight.textContent = 0;
    kiloRight.textContent = 0;

    //* Converted TEMPERATURE
    celsiusLeft.textContent = 0;
    fahrenheitLeft.textContent = 0;
    fahrenheitRight.textContent = 0;
    celsiusRight.textContent = 0;
  }
});
