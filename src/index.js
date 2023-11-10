import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from './js/AgeCalculator.js';

let myAgeCalculator;

function enterAgeForm() {
  event.preventDefault();

  let age = parseInt(document.getElementById("age-input").value);
  myAgeCalculator = new AgeCalculator(age);
  
  const pTag = document.createElement("p");

  pTag.append(`Age on Earth: ${myAgeCalculator.earthYears}`);
  pTag.append(document.createElement("br"));
  pTag.append(`Age on Mercury: ${myAgeCalculator.calculateMercuryYears()}`);
  pTag.append(document.createElement("br"));
  pTag.append(`Age on Venus: ${myAgeCalculator.calculateVenusYears()}`);
  pTag.append(document.createElement("br"));
  pTag.append(`Age on Mars: ${myAgeCalculator.calculateMarsYears()}`);
  pTag.append(document.createElement("br"));
  pTag.append(`Age on Jupiter: ${myAgeCalculator.calculateJupiterYears()}`);

  document.getElementById("planetHolder").append(pTag);
}

window.addEventListener("load", function() {
  document.getElementById("enterAgeForm").addEventListener("submit", enterAgeForm);
});