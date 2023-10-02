class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.calculatedPrice = (this.basePrice + this.glazing) * this.size;
    }
}

let rollSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, rollPrice){
    const newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);
    rollSet.add(newRoll);
}

const roll1 = addNewRoll("Original", "Sugar Milk", 1, 2.49);
const roll2 = addNewRoll("Walnut", "Vanilla Milk", 12, 3.49);
const roll3 = addNewRoll("Raisin", "Sugar Milk", 3, 2.99);
const roll4 = addNewRoll("Apple", "Original", 3, 3.49);
