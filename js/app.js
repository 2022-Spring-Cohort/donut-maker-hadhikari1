import DonutMaker from "./DonutMaker.js";

const donutMaker = new DonutMaker(); 
updateView();

const donutCollector = document.querySelector(".gameView");
donutCollector.addEventListener("click", () => {
    donutMaker.addDonut();
    updateView();
})

function updateView(){
    const count = donutMaker.getDonutCount();
    const donuctCount = document.querySelector(".click");
    donuctCount.innerHTML = "<h2> Donut Counts: " + count + "</h2>";
    
    const donutEarnedPerClick = document.createElement("p");
    donutEarnedPerClick.className = "donutPerClick";
    donuctCount.appendChild(donutEarnedPerClick)
    donutEarnedPerClick.innerHTML = "Per Click: "+ donutMaker.donutEarnedPerClick.toFixed(2);
   
    const autoclickerPurchase = document.querySelector(".ownedAutoclicker");
    autoclickerPurchase.innerText = donutMaker.autoClicker;

    const displayCost = document.querySelector(".clickerPrice");
    displayCost.innerText = Math.round(donutMaker.autoClickerCost);

    const autoClickerEl = document.querySelector(".purchase")
    autoClickerEl.disabled = !donutMaker.autoClickerEnabled;
    if(donutMaker.autoClickerEnabled){
        autoClickerEl.style.backgroundColor = "green";
    }
    else{
        autoClickerEl.style.backgroundColor = "grey";
    }

    const multiplierCost = document.querySelector(".multiplierPrice")
    multiplierCost.innerText = Math.round(donutMaker.multiplierCost);

    const clickMultiplierPurchase = document.querySelector(".ownedMultiplier");
    clickMultiplierPurchase.innerText = donutMaker.multiplier; 

    const clickMultiplierEl = document.querySelector(".purchase2")
    clickMultiplierEl.disabled = !donutMaker.clickMultiplierEnabled
    if(donutMaker.clickMultiplierEnabled){
        clickMultiplierEl.style.backgroundColor = "green";
    }
    else{
        clickMultiplierEl.style.backgroundColor = "grey";
    }
}

const buyAutoClicker = document.querySelector(".autoClicker");
buyAutoClicker.addEventListener("click", () =>{
    donutMaker.purchaseAutoClicker();
    donutMaker.incremenatDonutCountWithAutoClicker();
    updateView();
})

const buyDonutMultiplier = document.querySelector(".clickMultiplier");
buyDonutMultiplier.addEventListener("click", () =>{
    donutMaker.purchaseMultiplier();
    updateView();
})


const resetGame = document.querySelector(".gameReset");
resetGame.addEventListener("click", () =>{
    donutMaker.resetGame();
    updateView();
})


