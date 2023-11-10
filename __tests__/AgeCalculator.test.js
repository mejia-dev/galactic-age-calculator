import { AgeCalculator } from '../src/js/AgeCalculator.js';

describe("AgeCalculator", () => {

  let myAgeCalculator;

  beforeEach(() => {
    myAgeCalculator = new AgeCalculator(10);
  });

  test("should add input to earthYears parameter of object", () => {
    expect(myAgeCalculator.earthYears).toEqual(10);
  });

  test("should calculate the age divided by .24 to two decimal places (not rounded) when calculateMercuryYears is called", () => {
    expect(myAgeCalculator.calculateMercuryYears()).toEqual(41.66);
  });

  test("should calculate the age divided by .62 to two decimal places (not rounded) when calculateVenusYears is called", () => {
    expect(myAgeCalculator.calculateVenusYears()).toEqual(16.12);
  });

  test("should calculate the age divided by 1.88 to two decimal places (not rounded) when calculateMarsYears is called", () => {
    expect(myAgeCalculator.calculateMarsYears()).toEqual(5.31);
  });

  test("should calculate the age divided by 11.86 to two decimal places (not rounded) when calculateJupiterYears is called", () => {
    expect(myAgeCalculator.calculateJupiterYears()).toEqual(0.84);
  });
})