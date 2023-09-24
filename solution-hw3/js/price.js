let allGlazings = [0.00, 0.00, 0.50, 1.50];
let allPackSizes = [1, 3, 6, 10];
let price = 2.49;
let multiply = 1;

let finalPrice = document.querySelector("#final_price");

let glazingSelect = document.querySelector("#glazing");
glazingSelect.addEventListener("change", glazingChange);

let packSelect = document.querySelector("#size");
packSelect.addEventListener("change", packChange);

function glazingChange(){
    console.log("You selected the glazing with: " + this.value);

    const priceChange = Number(this.value);

    let newPrice = 2.49;

    for(i = 0; i < allGlazings.length; i++){
        if (priceChange === allGlazings[i]){
            newPrice += priceChange;
            console.log("The new price is: " + newPrice);
            price = newPrice;
        }
    }

    let finalOutput = price * multiply;
    let roundedFinalOutput = finalOutput.toFixed(2);
    console.log("the final output is : " + roundedFinalOutput);
    finalPrice.innerHTML = "$" + roundedFinalOutput;
}

function packChange(){
    console.log("You selected pack with: " + this.value);

    const selectedPackSize = Number(this.value);

    for(i = 0; i < allPackSizes.length; i++){
        if(selectedPackSize === allPackSizes[i]){
           multiply = selectedPackSize;
           console.log("the new pack size is: " + multiply);
        }
    }

    let finalOutput = price * multiply;
    let roundedFinalOutput = finalOutput.toFixed(2);
    console.log("the final output is : " + roundedFinalOutput);
    finalPrice.innerHTML = "$" + roundedFinalOutput;
}