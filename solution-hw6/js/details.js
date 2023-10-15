let allGlazings = {
    "Keep Original": {
        "addOn": 0.00, 
        "displayName": "Keep Original", 
    }, 
    "Sugar Milk": {
        "addOn": 0.00, 
        "displayName": "Sugar Milk", 
    },
    "Vanilla Milk": {
        "addOn": 0.50, 
        "displayName": "Vanilla Milk", 
    },
    "Double-Chocolate": {
        "addOn": 1.50, 
        "displayName": "Double-Chocolate", 
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

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

// Display on this page
const rollType = params.get("roll");
const headerSec = document.querySelector("#title_text");
headerSec.innerHTML = rollType + " cinnamon roll";
const imageSec = document.querySelector("#detail_img");
imageSec.src = "assets/products/" + rolls[rollType]["imageFile"];


// Populate options
let rollFinalPrice = document.querySelector("#final_price");
rollFinalPrice.innerHTML = "$" + rolls[rollType]["basePrice"];

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

/**** HW 6 Code Below:****/

// Create a class for the object
class newItem {
    constructor(rollType, glazingType, glazingPrice, displayedSize, calcSize, basePrice, imageURL) {
        this.type = rollType;

        this.glazingType =  glazingType;
        this.glazingPrice = glazingPrice;

        this.displayedSize = displayedSize;
        this.calcSize = calcSize;

        this.basePrice = basePrice;
        this.calculatedPrice = (this.basePrice + this.glazingPrice) * this.calcSize;
        this.calculatedPrice = this.calculatedPrice.toFixed(2);

        console.log(this.calculatedPrice);

        this.imageURL = imageURL;
        this.element = null;
    }
}

// Create an empty array
let cart = [];
let cartString = "";

if (localStorage.getItem("storedRolls") !== null){
    retrieveLocalStorage();
}

// Retrieve local storage
function retrieveLocalStorage(){
    cartString = localStorage.getItem("storedRolls");
    cart = JSON.parse(cartString);
}

// Create a object when users click the button
function createRollInfo(){
    let rollTypeName = rollType + " cinnamon roll";
    let glazingType = document.querySelector("#glazing").value;
    let glazingPrice = allGlazings[glazingType]["addOn"];

    let calcSize = parseFloat(document.querySelector("#size").value);
    let displayedSize = displayPrices[calcSize];

    let basePrice = rolls[rollType]["basePrice"];

    let imageURL = imageSec.src;

    let newRoll = new newItem(rollTypeName, glazingType, glazingPrice, displayedSize, calcSize, basePrice, imageURL);

    // Push the object to the array
    cart.push(newRoll);

    // Save the array as a string in local storage
    saveToLocalStorage();
}

function saveToLocalStorage(){
    let cartString = JSON.stringify(cart);
    localStorage.setItem("storedRolls", cartString);
    console.log(cart);
}