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

  test("should verify that input for getYearsSince prototype is smaller than this.earthYears and return an error if invalid", () => {
    expect(myAgeCalculator.getYearsSince(43)).toEqual("Invalid input. Prior birthday can't be larger than your current age");
  });

  test("should return how many Earth years have passed since the age entered into the getYearsSince prototype", () => {
    myAgeCalculator.getYearsSince(8);
    expect(myAgeCalculator.lastYearsSinceResult.earthYears).toEqual(2);
  });

  test("should allow calculateMercuryYears to have an optional parameter that can be used to calculate against a specific earthYears input", () => {
    expect(myAgeCalculator.calculateMercuryYears(13)).toEqual(54.16);
  });

  test("should allow calculateVenusYears to have an optional parameter that can be used to calculate against a specific earthYears input", () => {
    expect(myAgeCalculator.calculateVenusYears(13)).toEqual(20.96);
  });

  test("should allow calculateMarsYears to have an optional parameter that can be used to calculate against a specific earthYears input", () => {
    expect(myAgeCalculator.calculateMarsYears(13)).toEqual(6.91);
  });

  test("should allow calculateJupiterYears to have an optional parameter that can be used to calculate against a specific earthYears input", () => {
    expect(myAgeCalculator.calculateJupiterYears(13)).toEqual(1.09);
  });

  test("should return how many Mercury years have passed since the age entered into the getYearsSince prototype", () => {
    myAgeCalculator.getYearsSince(6);
    expect(myAgeCalculator.lastYearsSinceResult.mercuryYears).toEqual(16.66);
  });

  test("should return how many Venus years have passed since the age entered into the getYearsSince prototype", () => {
    myAgeCalculator.getYearsSince(6);
    expect(myAgeCalculator.lastYearsSinceResult.venusYears).toEqual(6.45);
  });

  test("should return how many Mars years have passed since the age entered into the getYearsSince prototype", () => {
    myAgeCalculator.getYearsSince(6);
    expect(myAgeCalculator.lastYearsSinceResult.marsYears).toEqual(2.12);
  });

  test("should return how many Jupiter years have passed since the age entered into the getYearsSince prototype", () => {
    myAgeCalculator.getYearsSince(6);
    expect(myAgeCalculator.lastYearsSinceResult.jupiterYears).toEqual(0.33);
  });

  test("should verify that input for getYearsTil prototype is larger than this.earthYears and return an error if invalid", () => {
    expect(myAgeCalculator.getYearsTil(2)).toEqual("Invalid input. Future age must be larger than your current age");
  });
})