import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from './js/AgeCalculator.js';

let myAgeCalculator;

function enterAgeForm() {
  event.preventDefault();

  let age = parseInt(document.getElementById("age-input").value);
  myAgeCalculator = new AgeCalculator(age);
  // document.getElementById("planetDiv").innerText = null;
  // Age on Mercury: ${myAgeCalculator.calculateMercuryYears()}
  // Age on Venus: ${myAgeCalculator.calculateVenusYears()}
  // Age on Mars: ${myAgeCalculator.calculateMarsYears()}
  // Age on Jupiter: ${myAgeCalculator.calculateJupiterYears()}
  const pTag = document.createElement("p");
  let earthYears = myAgeCalculator.earthYears;
  console.log(earthYears.toString());

  pTag.append(earthYears);
  document.getElementById("outputDiv").append(pTag);
}

window.addEventListener("load", function() {
  document.getElementById("enterAgeForm").addEventListener("submit", enterAgeForm);
});