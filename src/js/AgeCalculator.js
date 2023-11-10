export class AgeCalculator {
  constructor(ageInput) {
    this.earthYears = ageInput;
  }

  calculateMercuryYears() {
    let mercuryMathString = (this.earthYears / 0.24).toString();
    let mercuryYears = parseFloat(mercuryMathString.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    return mercuryYears;
  }
}