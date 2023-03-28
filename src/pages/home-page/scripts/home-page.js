/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

//  import { setupCounter } from '../../../global-scripts/scripts/counter/counter.js'

//  setupCounter(document.querySelector('#counter'))

let buttons = document.getElementsByTagName("button");
function setLoading() {
  this.setAttribute("data-loading", "1");
  this.disabled = false;
  for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.padding = "0";
      if (buttons[i] !== this) {
          buttons[i].disabled = true;
          buttons[i].style.padding = "17px";
        }
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", setLoading);
}
