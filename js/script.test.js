import {BMI} from './script.js';

test('BMI class calculate', () => {
    let example = new BMI(100, 2)
    expect(example.calculate).toBe(25)
    expect(example.category).toBe('Overweight (pre-obese)')
})

describe('BMI class category', () => {
    it.each`
    weight |   height  | category
    ${40}  |  ${1.70}  | ${'Underweight (severe thinness)'}
    ${40}  |  ${1.55}  | ${'Underweight (moderate thinness)'}
    ${50}  |  ${1.65}  | ${'Underweight (mild thinness)'}
    ${90}  |  ${1.90}  | ${'Normal range'}
    ${90}  |  ${1.80}  | ${'Overweight (pre-obese)'}
    ${90}  |  ${1.65}  | ${'Obese (class I)'}
    ${90}  |  ${1.55}  | ${'Obese (class II)'}
    ${90}  |  ${1.45}  | ${'Obese (class III)'}
    `('$category', ({ weight, height, category }) => {
        let example = new BMI(weight, height);
        expect(example.category).toBe(category)
        }
    )
})