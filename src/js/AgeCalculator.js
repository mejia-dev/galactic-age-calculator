export class AgeCalculator {
  constructor(ageInput) {
    this.earthYears = ageInput;
  }

  calculateMercuryYears(input) {
    let mercuryMathString = ((input || this.earthYears) / 0.24).toString();
    let mercuryYears = parseFloat(mercuryMathString.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    return mercuryYears;
  }

  calculateVenusYears(input) {
    let venusMathString = ((input || this.earthYears) / 0.62).toString();
    let venusYears = parseFloat(venusMathString.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    return venusYears;
  }

  calculateMarsYears(input) {
    let marsMathString = ((input || this.earthYears) / 1.88).toString();
    let marsYears = parseFloat(marsMathString.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    return marsYears;
  }

  calculateJupiterYears(input) {
    let jupiterMathString = ((input || this.earthYears) / 11.86).toString();
    let jupiterYears = parseFloat(jupiterMathString.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    return jupiterYears;
  }

  getYearsSince(input) {
    if (input > this.earthYears) {
      return "Invalid input. Prior birthday can't be larger than your current age";
    }
    const earthYearsSince = this.earthYears - input;
    this.lastYearsSinceResult = {};
    this.lastYearsSinceResult.earthYears = earthYearsSince;
    this.lastYearsSinceResult.mercuryYears = this.calculateMercuryYears(earthYearsSince);
    this.lastYearsSinceResult.venusYears = this.calculateVenusYears(earthYearsSince);
    this.lastYearsSinceResult.marsYears = this.calculateMarsYears(earthYearsSince);
    this.lastYearsSinceResult.jupiterYears = this.calculateJupiterYears(earthYearsSince);
  }

  getYearsTil(input) {
    if (input < this.earthYears) {
      return "Invalid input. Future age must be larger than your current age";
    }
    const earthYearsTil = input - this.earthYears;
    this.lastYearsTilResult = {};
    this.lastYearsTilResult.earthYears = earthYearsTil;
    this.lastYearsTilResult.mercuryYears = this.calculateMercuryYears(earthYearsTil);
  }
}