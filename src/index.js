import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from './js/AgeCalculator.js';

let myAgeCalculator;

function enterAgeForm() {
  event.preventDefault();
  let age = parseInt(document.getElementById("age-input").value);
  myAgeCalculator = new AgeCalculator(age);
  displayBaseAges();
  hideAgeForm();
}

function hideAgeForm() {
  document.getElementById("formHolder").prepend(document.createElement("br"));
  document.getElementById("enterAgeForm").setAttribute("class","hidden");
}

function displayBaseAges() {
  const pTag = document.createElement("p");
  pTag.append(`Age on Earth: ${myAgeCalculator.earthYears} years old`);
  pTag.append(document.createElement("br"));
  pTag.append(`Age on Mercury: ${myAgeCalculator.calculateMercuryYears()} years old`);
  pTag.append(document.createElement("br"));
  pTag.append(`Age on Venus: ${myAgeCalculator.calculateVenusYears()} years old`);
  pTag.append(document.createElement("br"));
  pTag.append(`Age on Mars: ${myAgeCalculator.calculateMarsYears()} years old`);
  pTag.append(document.createElement("br"));
  pTag.append(`Age on Jupiter: ${myAgeCalculator.calculateJupiterYears()} years old`);
  document.getElementById("planetHolder").append(pTag);
}



window.addEventListener("load", function () {
  document.getElementById("enterAgeForm").addEventListener("submit", enterAgeForm);
});