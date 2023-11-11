import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from './js/AgeCalculator.js';

let myAgeCalculator;

function handleEnterAgeForm() {
  event.preventDefault();
  let age = parseInt(document.getElementById("age-input").value);
  myAgeCalculator = new AgeCalculator(age);
  displayBaseAges();
  hideAgeForm();
  toggleManipulationForms();
}

function hideAgeForm() {
  document.getElementById("enterAgeForm").setAttribute("class", "hidden");
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

function handleYearsSinceForm() {
  event.preventDefault();
  let yearsSinceInput = parseInt(document.getElementById("yearsSinceInput").value);
  myAgeCalculator.getYearsSince(yearsSinceInput);
  if (yearsSinceInput >= myAgeCalculator.earthYears) {
    document.getElementById("yearsSinceFormError").removeAttribute("class");
    return;
  }
  document.getElementById("yearsSinceFormError").setAttribute("class", "hidden");
  document.getElementById("mercuryYearsSinceResult").innerText = (`${myAgeCalculator.lastYearsSinceResult.mercuryYears} years have passed since you were ${yearsSinceInput}`);
  document.getElementById("venusYearsSinceResult").innerText = (`${myAgeCalculator.lastYearsSinceResult.venusYears} years have passed since you were ${yearsSinceInput}`);
  document.getElementById("earthYearsSinceResult").innerText = (`${myAgeCalculator.lastYearsSinceResult.earthYears} years have passed since you were ${yearsSinceInput}`);
  document.getElementById("marsYearsSinceResult").innerText = (`${myAgeCalculator.lastYearsSinceResult.marsYears} years have passed since you were ${yearsSinceInput}`);
  document.getElementById("jupiterYearsSinceResult").innerText = (`${myAgeCalculator.lastYearsSinceResult.jupiterYears} years have passed since you were ${yearsSinceInput}`);
}

function handleYearsTilForm() {
  event.preventDefault();
  let yearsTilInput = parseInt(document.getElementById("yearsTilInput").value);
  myAgeCalculator.getYearsTil(yearsTilInput);
  if (yearsTilInput <= myAgeCalculator.earthYears) {
    document.getElementById("yearsTilFormError").removeAttribute("class");
    return;
  }
  document.getElementById("yearsTilFormError").setAttribute("class", "hidden");
  document.getElementById("mercuryYearsTilResult").innerText = (`${myAgeCalculator.lastYearsTilResult.mercuryYears} years left until you are ${yearsTilInput}`);
  document.getElementById("venusYearsTilResult").innerText = (`${myAgeCalculator.lastYearsTilResult.venusYears} years left until you are ${yearsTilInput}`);
  document.getElementById("earthYearsTilResult").innerText = (`${myAgeCalculator.lastYearsTilResult.earthYears} years left until you are ${yearsTilInput}`);
  document.getElementById("marsYearsTilResult").innerText = (`${myAgeCalculator.lastYearsTilResult.marsYears} years left until you are ${yearsTilInput}`);
  document.getElementById("jupiterYearsTilResult").innerText = (`${myAgeCalculator.lastYearsTilResult.jupiterYears} years left until you are ${yearsTilInput}`);
}

window.addEventListener("load", function () {
  document.getElementById("enterAgeForm").addEventListener("submit", handleEnterAgeForm);
  document.getElementById("yearsSinceForm").addEventListener("submit", handleYearsSinceForm);
  document.getElementById("yearsTilForm").addEventListener("submit", handleYearsTilForm);
});