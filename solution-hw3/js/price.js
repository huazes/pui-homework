let allGlazings = {
    original: {
        price: 2.49, 
        displayName: "Keep Original", 
    }, 
    sugarmilk: {
        price: 2.49, 
        displayName: "Sugar Milk", 
    },
    vanillamilk: {
        price: 2.99, 
        displayName: "Vanilla Milk", 
    },
    doublechocolate: {
        price: 3.99, 
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
        price: 6,
    },
    {
        size: 12,
        price: 10,
    }
];

let finalPrice = document.querySelector("#final_price");
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

    let glazingPrice = glaze.price;
    let output = selectedSize * glazingPrice;
    output = output.toFixed(2);
    output = output.toString();

    finalPrice.innerHTML = "$" + output;
}