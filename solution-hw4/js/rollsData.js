const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

let allGlazings = {
    "Keep Original": {
        addOn: 0.00, 
        displayName: "Keep Original", 
    }, 
    "Sugar Milk": {
        addOn: 0.00, 
        displayName: "Sugar Milk", 
    },
    "Vanilla Milk": {
        addOn: 0.50, 
        displayName: "Vanilla Milk", 
    },
    "Double Chocolate": {
        addOn: 1.50, 
        displayName: "Double Chocolate", 
    }
}

let allSizes = [
    {
        size: 1,
        price: 1,
    },
    {
        size: 3,
        price: 3,
    },
    {
        size: 6,
        price: 5,
    },
    {
        size: 12,
        price: 10,
    }
];

let cart = [];

///// updating features /////
const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const rollType = params.get("roll");

const headerSec = document.querySelector("#title_text");
headerSec.innerHTML = rollType + " cinnamon roll";

//can I use _ rather than -?
const imageSec = document.querySelector("#detail_img");

// why is this not working?
imageSec.src = "assets/products/" + rolls[rollType]["imageFile"];

///// option section /////
let rollFinalPrice = document.querySelector("#final_price");
let glazingDropdown = document.getElementById("glazing");
let sizeDropdown = document.getElementById("size");

for (let option in allGlazings){
    let typicalGlazing = allGlazings[option];

    let newOption = document.createElement("option");

    let newOptionName = document.createTextNode(typicalGlazing.displayName);
    newOption.appendChild(newOptionName);

    newOption.setAttribute("value", option);
    glazingDropdown.appendChild(newOption);
}

for (let option in allSizes){
    let typicalSize = allSizes[option];

    let newOption = document.createElement("option");
    let newOptionName = document.createTextNode(typicalSize.size);
    newOption.appendChild(newOptionName);
    newOption.setAttribute("value", typicalSize.price);
    sizeDropdown.appendChild(newOption);
}

function onSelectValueChange (){
    let selectedGlazing = document.querySelector("#glazing").value;
    let selectedSize = parseFloat(document.querySelector("#size").value);

    let glaze = allGlazings[selectedGlazing];

    let addPrice = glaze.addOn;

    let output = selectedSize * (addPrice + rolls[rollType]["basePrice"]);
    output = output.toFixed(2);
    output = output.toString();

    rollFinalPrice.innerHTML = "$" + output;
}

///// cart arrays /////
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//? DO I just onclick to trigger this function?
function createRollInfo (){
    let selectedGlazing = document.querySelector("#glazing").value;
    let selectedSize = parseFloat(document.querySelector("#size").value);
    let newRoll = new Roll(rollType, selectedGlazing, selectedSize, rolls[rollType]["basePrice"]);
    cart.push(newRoll);
    console.log(cart);
}
