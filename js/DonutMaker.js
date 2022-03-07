export default class DonutMaker {

    constructor() {
        this.donutClick = 1;
        this.donutCount = 1;

        this.autoClicker = 0;
        this.autoClickerCost = 100;

        this.multiplier = 0;
        this.multiplierCost = 10;
    }

    clickCount() {
       return this.donutClick++; 
    }

    getDonutCount(){
        return this.donutClick; 
    }

    increaseAutoclickerCost() {
        this.autoClickerCost = this.autoClickerCost + (this.autoClickerCost * 0.1);
    }

    increaseMultiplierCost() {
        this.multiplierCost = this.multiplierCost + (this.multiplierCost * 0.1)
    }


    
}
