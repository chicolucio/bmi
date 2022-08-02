export class BMI {
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }

    get calculate() {
        return this.calculateBMI();
    }

    calculateBMI() {
        return this.weight / (this.height * this.height);
    }

    get category() {
        return this.categoryBMI();
    }

    categoryBMI() {
        let bmi = this.calculate
        let result
        if (bmi < 16.0) {
            result = 'Underweight (severe thinness)'
        } else if (bmi < 17.0) {
            result = 'Underweight (moderate thinness)'
        } else if (bmi < 18.5) {
            result = 'Underweight (mild thinness)'
        } else if (bmi < 25.0) {
            result = 'Normal range'
        } else if (bmi < 30.0) {
            result = 'Overweight (pre-obese)'
        } else if (bmi < 35.0) {
            result = 'Obese (class I)'
        } else if (bmi < 40.0) {
            result = 'Obese (class II)'
        } else {
            result = 'Obese (class III)'
        }
        return result;
    }
}