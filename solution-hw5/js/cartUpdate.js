class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, imageURL) {
        this.type = rollType;

        this.glazingType =  rollGlazing;
        this.glazingPrice = allGlazingPrices[this.glazingType];

        this.displayedSize = packSize;
        this.calcSize = sizesDic[this.displayedSize];

        this.basePrice = rollPrice;
        this.calculatedPrice = (this.basePrice + this.glazingPrice) * this.calcSize;
        this.calculatedPrice = this.calculatedPrice.toFixed(2);

        this.imageURL = imageURL;
        this.element = null;
    }
}

const allBasePrices = {
    "Original": 2.49,
    "Apple": 3.49,
    "Raisin": 2.99,
    "Walnut": 3.49,
    "Double-Chocolate": 3.99,
    "Strawberry": 3.99  
};

const allGlazingPrices = {
    "Keep Original": 0.00,  
    "Sugar Milk": 0.00,  
    "Vanilla Milk": 0.50, 
    "Double Chocolate": 1.50
}

const sizesDic = {
    1: 1,
    3: 3,
    6: 5,
    12: 10
}

let rollSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, rollPrice, imageURL){
    const newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice, imageURL);
    rollSet.add(newRoll);
}

const roll1 = addNewRoll("Original", "Sugar Milk", 1, allBasePrices["Original"], "assets/products/original-cinnamon-roll.jpg");
const roll2 = addNewRoll("Walnut", "Vanilla Milk", 12, allBasePrices["Walnut"], "assets/products/walnut-cinnamon-roll.jpg");
const roll3 = addNewRoll("Raisin", "Sugar Milk", 3, allBasePrices["Raisin"], "assets/products/raisin-cinnamon-roll.jpg");
const roll4 = addNewRoll("Apple", "Keep Original", 3, allBasePrices["Apple"], "assets/products/apple-cinnamon-roll.jpg");

let finalPrice = document.querySelector("#final_price");


for (let roll of rollSet){
    createItem(roll);
}

finalPriceUpdate();

function createItem(roll){
    const template = document.querySelector("#item-template");
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector(".cart_card");

    const rollList = document.querySelector(".cart_info");
    rollList.append(roll.element);

    updateItem(roll);

    const removeBtn = roll.element.querySelector(".remove_link");
    removeBtn.onclick = function(){
        deleteItem(roll);
        finalPriceUpdate();
    }
}

function updateItem(roll){
    const rollImage = roll.element.querySelector("#roll_image");
    const rollName = roll.element.querySelector("#roll_name");
    const rollGlazing = roll.element.querySelector("#roll_glazing");
    const packSize = roll.element.querySelector("#pack_size");
    const itemPrice = roll.element.querySelector("#item_price");

    rollImage.src = roll.imageURL;
    rollName.innerHTML = roll.type + " Cinnamon Roll";
    rollGlazing.innerHTML = roll.glazingType;
    packSize.innerHTML = "Pack Size: " + roll.displayedSize;

    let itemPriceTotal = roll.calculatedPrice.toString();
    itemPrice.innerHTML = "$ " + itemPriceTotal;
}

function deleteItem(roll){
    roll.element.remove();
    rollSet.delete(roll);
}

function finalPriceUpdate(){
    let calcFinalPrice = 0;
    for(let roll of rollSet){
        let price = parseFloat(roll.calculatedPrice);
        calcFinalPrice += price;
    }
    calcFinalPrice = calcFinalPrice.toFixed(2);
    finalPrice.innerHTML = "$ " + calcFinalPrice.toString();
}