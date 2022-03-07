import DonutMaker from "./DonutMaker";

const donutMaker = new DonutMaker(); 

const pageContainer = document.querySelector(".container");

const headerEl = document.querySelector(".headerNav");
const navigationEl = document.querySelector("nav");
const company = document.querySelector(".companyName");
const contact = document.querySelector(".contactInfo");
const inspiration = document.querySelector(".inspiration");

const mainEl = document.querySelector(".main");

const donutCollector = document.querySelector(".gameView");
donutCollector.addEventListener("click", () => {
    const count = donutMaker.clickCount();
    const donuctCount = document.querySelector(".click");
    donuctCount.innerHTML = "<h2> Donut Count: " + count + "</h2>"
})
const autoClicker = document.querySelector(".autoClicker");
const gameResetBtn = document.querySelector(".gameReset");
const footer = document.querySelector(".footer");
