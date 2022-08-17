// https://calculator.swiftutors.com/car-depreciation-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const currentValueoftheCarRadio = document.getElementById('currentValueoftheCarRadio');
const originalCostoftheCarRadio = document.getElementById('originalCostoftheCarRadio');
const percentofDepreciationperYearRadio = document.getElementById('percentofDepreciationperYearRadio');
const numberofYearsOwnedRadio = document.getElementById('numberofYearsOwnedRadio');

let currentValueoftheCar;
let originalCostoftheCar = v1;
let percentofDepreciationperYear = v2;
let numberofYearsOwned = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

currentValueoftheCarRadio.addEventListener('click', function() {
  variable1.textContent = '(C) Original Cost of the Car ($)';
  variable2.textContent = '(D) Percent of Depreciation per Year (%)';
  variable3.textContent = '(Y) Number of Years Owned (years)';
  originalCostoftheCar = v1;
  percentofDepreciationperYear = v2;
  numberofYearsOwned = v3;
  result.textContent = '';
});

originalCostoftheCarRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Current Value of the Car ($)';
  variable2.textContent = '(D) Percent of Depreciation per Year (%)';
  variable3.textContent = '(Y) Number of Years Owned (years)';
  currentValueoftheCar = v1;
  percentofDepreciationperYear = v2;
  numberofYearsOwned = v3;
  result.textContent = '';
});

percentofDepreciationperYearRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Current Value of the Car ($)';
  variable2.textContent = '(C) Original Cost of the Car ($)';
  variable3.textContent = '(Y) Number of Years Owned (years)';
  currentValueoftheCar = v1;
  originalCostoftheCar = v2;
  numberofYearsOwned = v3;
  result.textContent = '';
});

numberofYearsOwnedRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Current Value of the Car ($)';
  variable2.textContent = '(C) Original Cost of the Car ($)';
  variable3.textContent = '(D) Percent of Depreciation per Year (%)';
  currentValueoftheCar = v1;
  originalCostoftheCar = v2;
  percentofDepreciationperYear = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(currentValueoftheCarRadio.checked)
    result.textContent = `Current Value of the Car = ${computeCurrentValueoftheCar().toFixed(2)} $`;

  else if(originalCostoftheCarRadio.checked)
    result.textContent = `Original Cost of the Car = ${computeOriginalCostoftheCar().toFixed(2)} $`;

  else if(percentofDepreciationperYearRadio.checked)
    result.textContent = `Percent of Depreciation per Year = ${computePercentofDepreciationperYear().toFixed(2)} %`;

  else if(numberofYearsOwnedRadio.checked)
    result.textContent = `Number of Years Owned = ${computeNumberofYearsOwned().toFixed(2)} years`;
})

// calculation

function computeCurrentValueoftheCar() {
  return Number(originalCostoftheCar.value) * Math.pow(1 - (Number(percentofDepreciationperYear.value) / 100), Number(numberofYearsOwned.value));
}

function computeOriginalCostoftheCar() {
  return Number(currentValueoftheCar.value) / Math.pow(1 - (Number(percentofDepreciationperYear.value) / 100), Number(numberofYearsOwned.value));
}

function computePercentofDepreciationperYear() {
  return (1 - Math.pow(Number(currentValueoftheCar.value) / Number(originalCostoftheCar.value), 1 / Number(numberofYearsOwned.value))) * 100;
}

function computeNumberofYearsOwned() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(straightLineDepreciation.value);
}