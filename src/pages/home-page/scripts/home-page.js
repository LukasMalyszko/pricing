/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

//  import { setupCounter } from '../../../global-scripts/scripts/counter/counter.js'

//  setupCounter(document.querySelector('#counter'))

const buttonBasic = document.getElementById("button-basic");
const buttonPro = document.getElementById("button-pro");
const buttonEnter = document.getElementById("button-enter");
const loaders = document.getElementsByClassName("load");

function initLoading() {
    
    
        buttonBasic.classList.add("hidden");
        buttonPro.classList.add("hidden");
        buttonEnter.classList.add("hidden");
      
    for(let i = 0; i < loaders.length; i++){
        let loader = loaders[i];
        loader.classList.add("loader");
        setTimeout(()=> {
            loader.style.display = "none"
            buttonBasic.classList.remove("hidden");
            buttonPro.classList.remove("hidden");
            buttonEnter.classList.remove("hidden");
        }, 3000);
    }
}

    buttonBasic.addEventListener("click", initLoading);
    buttonPro.addEventListener("click", initLoading);
    buttonEnter.addEventListener("click", initLoading);
  
