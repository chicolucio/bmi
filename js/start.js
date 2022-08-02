import {BMI} from "./script.js";

function start() {
    let buttonCalculateBMI = document.querySelector('#button-calculate-bmi');
    buttonCalculateBMI.addEventListener('click', handleCalculateBMI);

    let inputWeight = document.querySelector('#input-weight');
    let inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleCalculateBMI);
    inputHeight.addEventListener('input', handleCalculateBMI);

    handleCalculateBMI();
}

function handleCalculateBMI() {
    let inputWeight = Number(document.querySelector('#input-weight').value);
    let inputHeight = Number(document.querySelector('#input-height').value);

    let bmi = new BMI(inputWeight, inputHeight);

    let resultBMI = document.querySelector('#bmi-result-calculate');
    resultBMI.textContent = bmi.calculate.toFixed(2);

    let categoryBMI = document.querySelector('#bmi-result-category');
    categoryBMI.textContent = bmi.category
}

start();
