import {calculateBMI} from "./script.js";

function start() {
    var buttonCalculateBMI = document.querySelector('#button-calculate-bmi');
    buttonCalculateBMI.addEventListener('click', handleCalculateBMI);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleCalculateBMI);
    inputHeight.addEventListener('input', handleCalculateBMI);

    handleCalculateBMI();
}

function handleCalculateBMI() {
    var inputWeight = Number(document.querySelector('#input-weight').value);
    var inputHeight = Number(document.querySelector('#input-height').value);

    var bmi = calculateBMI(inputWeight, inputHeight);

    var resultBMI = document.querySelector('#bmi-result');
    resultBMI.textContent = bmi.toFixed(2);
}

start();
