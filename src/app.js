/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let numGen = Math.floor(Math.random() * 13);
document.getElementById("number").innerHTML = numGen;

var suitArray = ["♦", "♥", "♠ ", "♣"];
let suitGen = suitArray[Math.floor(Math.random() * suitArray.length)];

document.getElementById("suitTop").innerHTML = suitGen;
document.getElementById("suitBottom").innerHTML = suitGen;
