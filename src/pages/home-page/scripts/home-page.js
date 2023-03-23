/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

import { setupCounter } from '../../../global-scripts/scripts/counter/counter.js'

setupCounter(document.querySelector('#counter'))


let button = document.getElementsByTagName("button");
let loader = document.getElementById("loader");
function loading() {
    loader.addClass("loader");

}


    button.addEventListener("click", loading);

