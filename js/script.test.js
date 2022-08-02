import { calculateBMI } from './script.js';

test('bmi', () => {
    expect(calculateBMI(100, 2)).toBe(25);
    expect(calculateBMI(0, 2)).toBe(0);
})