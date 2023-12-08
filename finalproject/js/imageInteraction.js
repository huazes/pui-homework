// Retrieve recommended arrays from local storage
let suggestedTypefaceArray = [];
let retrievedContent = "";
let retrievedFilter = [];

function retrieveLocalStorage(){
    // Retrieve typeface list
    let storedTypefaceString = localStorage.getItem("storedTypefaces");
    suggestedTypefaceArray = JSON.parse(storedTypefaceString);

    retrievedContent = localStorage.getItem("storedUserInput");
    
    // Show "sample text" if user did not input anything previously
    if (retrievedContent == ""){
        retrievedContent = "Sample Text";
    }
    
    // Retrieve selected options for filters
    let storedFilterString = localStorage.getItem("storedFilter");
    retrievedFilter = JSON.parse(storedFilterString);
}
retrieveLocalStorage();

// Change and display the list of typefaces based on local storage (both laptop and mobile version)
let suggestedTypeContainer = document.querySelector(".suggsted-typefaces");
while (suggestedTypeContainer.hasChildNodes()) {
    suggestedTypeContainer.removeChild(suggestedTypeContainer.firstChild);
}

let mobileTypeContainer = document.querySelector(".mobile-suggested-typefaces");
while (mobileTypeContainer.hasChildNodes()){
    mobileTypeContainer.removeChild(mobileTypeContainer.firstChild);
}

for (let i = 0; i < suggestedTypefaceArray.length; i++){
    let suggestedTypeChild = document.createElement("a");
    suggestedTypeChild.innerText = suggestedTypefaceArray[i].name;
    suggestedTypeChild.href = "typeface.html?name=" + suggestedTypefaceArray[i].name;
    suggestedTypeChild.classList.add("filtered-typeface");
    suggestedTypeContainer.appendChild(suggestedTypeChild);

    let mobileTypeChild = document.createElement("a");
    mobileTypeChild.innerText = suggestedTypefaceArray[i].name;
    mobileTypeChild.href = "typeface.html?name=" + suggestedTypefaceArray[i].name;
    mobileTypeChild.classList.add("mobile-filtered-typeface");
    mobileTypeContainer.appendChild(mobileTypeChild);
}

// Change typeface's name based on URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const typeName = params.get("name");

let indiTypefaceName = document.querySelector("#indi-typeface-name");
indiTypefaceName.innerText = typeName;

// Update chosen image from local storage
function retrieveImageStorage(){
    let retrievedSrc = localStorage.getItem("imageSource");

    let imgContainer = document.querySelector("#uploaded-img-element");

    if (retrievedSrc !== ""){
        imgContainer.src = retrievedSrc;

        imgContainer.style.width = '100%';
        imgContainer.style.height = '100%';
        imgContainer.style.position = 'absolute';
        imgContainer = true;

        $(function() {
            $('#uploaded-img-element').dragZoom({
                scope: $("#display-part"),
                zoom: 0.5,
                minzoom: 1,
                maxzoom: 5,
            }, function() {});
    
        });
    }
    else{
        imgContainer.removeAttribute("src");
    }
}
retrieveImageStorage();

// Highlight visiting page option 
function updateVisitingFont(){
    let children = suggestedTypeContainer.querySelectorAll('.filtered-typeface');
    let mobileParent = document.querySelector(".mobile-suggested-typefaces");
    let mobileChildren = mobileParent.querySelectorAll('.mobile-filtered-typeface');
    
    for (let child of children){
        if (child.innerText === typeName){
            child.style.color = "#FF7A00";
        }
    }

    for (let child of mobileChildren){
        if (child.innerText === typeName){
            child.style.color = "#FF7A00";
        }
    }
}
updateVisitingFont();

// Demonstrate the user input based on current typeface
let displayedText = document.querySelector("#displayed-text");
displayedText.innerText = retrievedContent;
for (let i = 0; i < suggestedTypefaceArray.length; i++){
    if (typeName === suggestedTypefaceArray[i].name){
        displayedText.style.fontFamily = suggestedTypefaceArray[i].fontFamily;
    }
}

// Update selected filter based on local storage
let selectedFilters = document.querySelector(".selected-filters");
while (selectedFilters.hasChildNodes()) {
    selectedFilters.removeChild(selectedFilters.firstChild);
}

for (let i = 0; i < retrievedFilter.length; i++){
    let newFilter = document.createElement("p");
    newFilter.innerText = retrievedFilter[i];
    selectedFilters.appendChild(newFilter);
}

// Populate available typeface sizes
let sizeOption = document.getElementById("size");

for (let i = 20; i<110; i = i+10){
    let newSize = document.createElement("option");
    let sizeValue = i+"px";
    let newSizeName = document.createTextNode(sizeValue);
    newSize.appendChild(newSizeName);

    newSize.setAttribute("value", sizeValue);
    sizeOption.appendChild(newSize);
}

// Populate available typeface fonts
let fontOption = document.getElementById("font");
let currentTypeface;

for (let i = 0; i < suggestedTypefaceArray.length; i++){
    if (typeName === suggestedTypefaceArray[i].name){
        currentTypeface = suggestedTypefaceArray[i];
    }
}

let availFontsDic = currentTypeface.fontWeight;
let keys = Object.keys(availFontsDic);

for (let i = 0; i < keys.length; i++){
    let newFontWeight = document.createElement("option");
    let weightValue = keys[i];
    let newWeightName = document.createTextNode(weightValue);

    let num = availFontsDic[weightValue];
    newFontWeight.setAttribute("value", num);
    newFontWeight.appendChild(newWeightName);

    fontOption.appendChild(newFontWeight);
}

// Change the size of user input
function changeSize() {
    let selectedSize = document.querySelector("#size").value;
    displayedText.style.fontSize = selectedSize;
}

// Change the font of user input
function changeFont(){
    let selectedSize = document.querySelector("#font").value;
    displayedText.style.fontWeight = selectedSize;
}

// Change font's alignment
function changeAlignment(){
    let selectedAlignment = document.querySelector("#alignment").value;
    selectedAlignment = selectedAlignment.toLowerCase();
    displayedText.style.textAlign = selectedAlignment;
}

// Change font's color
let colorPicker = document.getElementById("color-picker");
function changeColor(){
    displayedText.style.color = colorPicker.value;
}

// Allow users to upload images
let imageInput = document.querySelector("#image-input");
let uploadedImage = "";
imageInput.addEventListener("change", changeImage);

let imageLoaded = false;

// Reference: https://www.jqueryscript.net/other/zoom-wheel-pan-drag-image.html
function changeImage(){
    let reader = new FileReader(); // reference
    let file = document.querySelector("#image-input").files[0];
    reader.addEventListener("load", () => {
        let imageElement = document.querySelector("#uploaded-img-element");
        imageElement.src = reader.result;

        // Store image source to local storage so that when user clicks a new typeface, the image is remained
        saveImageLocal(imageElement.src);

        // Update the feature of uploaded image
        imageElement.style.width = '100%';
        imageElement.style.height = '100%';
        imageElement.style.position = 'absolute';
        imageElement = true;

        // Add interactivity of the image (users can drag and zoom the image)
        $(function() {
                $('#uploaded-img-element').dragZoom({
                    scope: $("#display-part"),
                    zoom: 0.5,
                    minzoom: 1,
                    maxzoom: 5,
                }, function() {});
            
        });

    }, false,
    )
    if (file) {
        reader.readAsDataURL(file);
    }
}

// Save image source to local storage
function saveImageLocal(imageSrc){
    localStorage.setItem("imageSource", imageSrc);
}

// Remove image after clicking "reset"
function removeImage(){
    document.getElementById("uploaded-img-element").remove();
    let newImageHolder = document.createElement("img");
    newImageHolder.setAttribute("id", "uploaded-img-element");
    let container = document.querySelector("#display-part");
    container.append(newImageHolder);

    // Update to local storage
    let imageSrc = "";
    saveImageLocal(imageSrc);
}