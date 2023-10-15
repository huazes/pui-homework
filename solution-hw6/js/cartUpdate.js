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

/******* HW 5 Code Below:*******/ 
// Clone html structure
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

// Update information of the roll
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

/******* HW 6 Code Below:*******/
let cart = [];
let cartString = "";

if (localStorage.getItem("storedRolls") !== null){
    retrieveLocalStorage();
}

// Retrieve data from local storage
function retrieveLocalStorage(){
    cartString = localStorage.getItem("storedRolls");
    cart = JSON.parse(cartString);
}

// Populate rolls from the array
for (let roll of cart){
    createItem(roll);
}

// Display the price for current list of rolls
finalPriceUpdate();





function deleteItem(roll){
    // Get the index of the deleted roll
    let idx = cart.indexOf(roll);

    // Remove the roll from the array
    roll.element.remove();
    cart.splice(idx, 1);

    // Call to save updated data
    saveToLocalStorage();
}

// Save the updated data to local storage
function saveToLocalStorage(){
    let cartString = JSON.stringify(cart);
    localStorage.setItem("storedRolls", cartString);
}

function finalPriceUpdate(){
    let finalPrice = document.querySelector("#final_price");
    let calcFinalPrice = 0;
    for(let roll of cart){
        let price = parseFloat(roll.calculatedPrice);
        calcFinalPrice += price;
    }
    calcFinalPrice = calcFinalPrice.toFixed(2);
    finalPrice.innerHTML = "$ " + calcFinalPrice.toString();
}

