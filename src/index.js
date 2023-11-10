import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import AgeCalculator from './js/AgeCalculator.js';

function enterAgeForm() {
  event.preventDefault();

  // let myAgeCalculator = new AgeCalculator;

  document.getElementById("outputDiv").innerText = null;
  const pTag = document.createElement("p");
  pTag.append(document.getElementById("text-input").value);
  document.getElementById("outputDiv").append(pTag);
}

window.addEventListener("load", function() {
  document.getElementById("enterAgeForm").addEventListener("submit", enterAgeForm);
});