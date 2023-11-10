export class AgeCalculator {
  constructor(ageInput) {
    this.earthYears = ageInput;
  }

  calculateMercuryYears(input) {
    let mercuryMathString = ((input || this.earthYears) / 0.24).toString();
    let mercuryYears = parseFloat(mercuryMathString.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    return mercuryYears;
  }

  calculateVenusYears() {
    let venusMathString = (this.earthYears / 0.62).toString();
    let venusYears = parseFloat(venusMathString.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    return venusYears;
  }

  calculateMarsYears() {
    let marsMathString = (this.earthYears / 1.88).toString();
    let marsYears = parseFloat(marsMathString.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    return marsYears;
  }

  calculateJupiterYears() {
    let jupiterMathString = (this.earthYears / 11.86).toString();
    let jupiterYears = parseFloat(jupiterMathString.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    return jupiterYears;
  }

  getYearsSince(input) {
    if (input > this.earthYears) {
      return "Invalid input. Prior birthday can't be larger than your current age";
    }
    this.lastYearsSinceResult = {};
    this.lastYearsSinceResult.earthYears = this.earthYears - input;
  }
}