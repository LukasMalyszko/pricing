/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

//  import { setupCounter } from '../../../global-scripts/scripts/counter/counter.js'

//  setupCounter(document.querySelector('#counter'))

let buttons = document.querySelectorAll(".pricing-component__box-button");
let loading = false;

function setLoading() {
  if (loading) return null;
  this.setAttribute("data-loading", "1");
  this.disabled = false;
  loading = true;
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] !== this) {
      buttons[i].disabled = true;
    }
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", setLoading);
}
