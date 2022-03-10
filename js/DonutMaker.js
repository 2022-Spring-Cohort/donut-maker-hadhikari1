export default class DonutMaker {

    constructor() {
        this.donutClick = 0;
        this.donutCount = 1;

        this.autoClicker = 0;
        this.autoClickerCost = 10;

        this.multiplier = 0;
        this.multiplierCost = 10;
        this.donutMultiplierCount = 1.2;
        this.donutEarnedPerClick = 1;

        this.autoClickerEnabled = false;
        this.clickMultiplierEnabled = false; 
    }

    addDonut() {
        if(this.multiplier > 0){
            if (this.donutClick == 0) {
                this.donutClick++;
            } else {
                this.donutClick = this.donutClick + (this.donutClick * .2);
            }
        } else {
            this.donutClick++;
        }
       this.updateAutoClicker();
       this.updateMultiplier();
    }

    getDonutCount(){
        return Math.round(this.donutClick); 
    }

    //autoclicker
    addAutoClicker(){
        this.autoClicker++; 
    }

    getAutoClickerCost(){
        return this.autoClickerCost;
    }

    increaseAutoClickerCost() {
        this.autoClickerCost = this.autoClickerCost + (this.autoClickerCost * 0.1);
    }

    purchaseAutoClicker(){
        if(this.getDonutCount() >= this.autoClickerCost) {
            this.donutClick = this.donutClick - this.autoClickerCost; 
            this.addAutoClicker();
            this.increaseAutoClickerCost();
            return { autoClicker: this.autoClicker, 
                autoClickerCost: Math.round(this.autoClickerCost), 
                donutClick: this.donutClick, count: this.getDonutCount(),
            };
        }
        
    }

    incremenatDonutCountWithAutoClicker() {
        if(this.autoClicker > 0){
            setInterval(()=>{
                this.donutClick = this.donutClick + this.autoClicker;
                const donuctCount = document.querySelector(".click");
                donuctCount.innerHTML = "<h2> Donut Counts: " + this.getDonutCount() + "</h2>"
            },1000);
        } 
        this.updateAutoClicker();
    }

    updateAutoClicker() {
        if(this.getDonutCount() >= this.autoClickerCost){
            this.autoClickerEnabled = true;
        } 
        else{
            this.autoClickerEnabled = false;
        }
    }
    
    //multipler

    addMultiplier() {
        this.multiplier++; 
    }
    getMultiplierCost(){
        return this.multiplierCost;
    }
    increaseMultiplierCost() {
        this.multiplierCost = this.multiplierCost + (this.multiplierCost * 0.1)
    }
    
    purchaseMultiplier() {
        if(this.getDonutCount() >= this.multiplierCost){
            this.donutClick = this.donutClick - this.multiplierCost;
            this.addMultiplier();
            this.increaseMultiplierCost();
        }
        return {donutCount: this.donutClick, addMultiplier: this.multiplier,
            costMultiplier: this.increaseMultiplierCost(), earnedPerClick: this.donutEarnedPerClickWithMultiplier()
        }
    }

    updateMultiplier() {
        if(this.getDonutCount() >= this.multiplierCost){
            this.clickMultiplierEnabled = true;
        } 
        else{
            this.clickMultiplierEnabled = false;
        }
    }

    donutEarnedPerClickWithMultiplier() {
        this.donutEarnedPerClick = Math.pow(1.2, this.multiplier);
    }

    resetGame() {
        this.donutClick = 0;
        this.donutCount = 1;

        this.autoClicker = 0;
        this.autoClickerCost = 10;

        this.multiplier = 0;
        this.multiplierCost = 10;

        this.autoClickerEnabled = false;
        this.clickMultiplierEnabled = false; 
    }
}
