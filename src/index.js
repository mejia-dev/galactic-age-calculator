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
  toggleManipulationForms();
}

function hideAgeForm() {
  document.getElementById("enterAgeForm").setAttribute("class","hidden");
}

function displayBaseAges() {
  document.getElementById("mercuryTextHolder").innerText = (`Age on Mercury: ${myAgeCalculator.calculateMercuryYears()} years old`);
  document.getElementById("venusTextHolder").innerText = (`Age on Venus: ${myAgeCalculator.calculateVenusYears()} years old`);
  document.getElementById("earthTextHolder").innerText = (`Age on Earth: ${myAgeCalculator.earthYears} years old`);
  document.getElementById("marsTextHolder").innerText = (`Age on Mars: ${myAgeCalculator.calculateMarsYears()} years old`);
  document.getElementById("jupiterTextHolder").innerText = (`Age on Jupiter: ${myAgeCalculator.calculateJupiterYears()} years old`);
}

function toggleManipulationForms() {
  document.getElementById("manipulationFormsHolder").classList.toggle("hidden");
}

window.addEventListener("load", function () {
  document.getElementById("enterAgeForm").addEventListener("submit", enterAgeForm);
});