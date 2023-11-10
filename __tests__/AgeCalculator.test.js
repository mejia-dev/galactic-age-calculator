import { AgeCalculator } from '../src/js/AgeCalculator.js';

describe ("AgeCalculator", () => {

  let myAgeCalculator;

  beforeEach(() => {
    myAgeCalculator = new AgeCalculator(10);
  });

  test("should add input to earthYears parameter of object", () => {
    expect(myAgeCalculator.earthYears).toEqual(10);
  });

  test("should calculate the age divided by .24 (to two decimal places) when calculateMercuryYears is called", () => {
    expect(myAgeCalculator.calculateMercuryYears()).toEqual(41.66)
  });
})