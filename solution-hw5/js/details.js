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

let displayPrices = {
    "1" : 1,
    "3" : 3,
    "5" : 6,
    "10" : 12,
}

let cart = [];

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const rollType = params.get("roll");

const headerSec = document.querySelector("#title_text");
headerSec.innerHTML = rollType + " cinnamon roll";

const imageSec = document.querySelector("#detail_img");

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

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function createRollInfo (){
    let selectedGlazing = document.querySelector("#glazing").value;
    let selectedSize = parseFloat(document.querySelector("#size").value);
    let displayedSize = displayPrices[selectedSize];

    let newRoll = new Roll(rollType, selectedGlazing, displayedSize, rolls[rollType]["basePrice"]);
    cart.push(newRoll);
    console.log(cart);
}
