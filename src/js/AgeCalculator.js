export class AgeCalculator {
  constructor(ageInput) {
    this.earthYears = ageInput;
  }

  calculateMercuryYears() {
    let mercuryMathString = (this.earthYears / 0.24).toString();
    let mercuryYears = parseFloat(mercuryMathString.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    return mercuryYears;
  }

  calculateVenusYears() {
    let venusMathString = (this.earthYears / 0.62).toString();
    let venusYears = parseFloat(venusMathString.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    return venusYears;
  }
}