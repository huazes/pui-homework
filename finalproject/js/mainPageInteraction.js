// Retrieve typefaces list
let storedInput = "";
let storedSelection = [];
let storedArray = [];


mainPageRetrieve();

function mainPageRetrieve(){
    let storedInput = localStorage.getItem("storedUserInput");

    // retrieve user input
    let userInputContect = document.querySelector("#user-input-text");
    userInputContect.value = storedInput;
    
    let storedSelectionString = localStorage.getItem("storedFilter");
    storedSelection = JSON.parse(storedSelectionString);

    //retrieve selected mood
    let storedMood = storedSelection[0];
    let parentMoodDiv = document.querySelector(".mood-options");
    for (let child of parentMoodDiv.children){
        if (child.innerText === storedMood){
            child.classList.toggle("clickedOption");
        }
    }

    //retrieve selected functions
    let storedFunc = storedSelection[1];
    let parentFuncDiv = document.querySelector(".functionality-options");
    for (let child of parentFuncDiv.children){
        if (child.innerText === storedFunc){
            child.classList.toggle("clickedOption");
        }
    }

    //retrieve selected availabilities
    let storedAvail = storedSelection[2];
    let parentAvailDiv = document.querySelector(".availability-options");
    for (let child of parentAvailDiv.children){
        if (child.innerText === storedAvail){
            child.classList.toggle("clickedOption");
        }
    }

    let storedArrayString = localStorage.getItem("storedTypefaces");
    storedArray = JSON.parse(storedArrayString);   
    displayTypefaces(storedArray);
}


class Typeface{
    constructor(name, mood, functionality, availability, fontFamily, fontWeight){
        this.name = name;
        this.mood = mood;
        this.functionality = functionality;
        this.availability = availability;
        this.fontFamily = fontFamily;
        this.fontWeight = fontWeight;
    }
}

// Formal Typefaces
let librebakerville = new Typeface("Libre Baskerville", "Formal", ["Heading", "Sub-heading", "Paragraph"], ["Canva", "Figma", "Google Slides"], "'Libre Baskerville', serif",{"Regular":400, "Bold": 900});
let georgia = new Typeface("Georgia","Formal", ["Heading", "Sub-heading", "Paragraph"], ["Canva", "Figma", "Google Slides"], "'Georgia', serif", {"Normal": 400, "Bold": 700});
let timesNewRoman = new Typeface("Times New Roman","Formal", ["Heading", "Sub-heading", "Paragraph"], ["Canva", "Figma", "Google Slides"], "'Times New Roman', serif", {"Normal": 400, "Bold": 700});

// Clear Typefaces
let arial = new Typeface("Arial","Clear", ["Heading", "Sub-heading", "Paragraph"], ["Canva", "Figma", "Google Slides"], "'Arial', sans-serif", {"Normal": 400, "Bold": 700});
let calibri = new Typeface("Calibri","Clear", [false, false, "Paragraph"], [false, "Figma", "Google Slides"], "'Calibri', sans-serif", {"Normal": 400, "Bold": 700});
let helvetica = new Typeface("Helvetica","Clear", [false, false, "Paragraph"], ["Canva", "Figma", "Google Slides"], "'Helvetica Neue', Helvetica, Arial, sans-serif", {"Normal": 400, "Bold": 700});

// Creative Typefaces
let pacifico = new Typeface("Pacifico","Creative", ["Heading", false, false], ["Canva", "Figma", "Google Slides"], "'Pacifico', cursive", {"Regular":400});
let lobster = new Typeface("Lobster","Creative", ["Heading", false, false], ["Canva", "Figma", "Google Slides"], "'Lobster', sans-serif", {"Regular":400});
let tangerine = new Typeface("Tangerine","Creative", ["Heading", false, false], ["Canva", "Figma", "Google Slides"], "'Tangerine', cursive", {"Regular":400, "Bold": 700});
let alexBrush = new Typeface("Alex Brush","Creative", ["Heading", false, false], ["Canva", "Figma", "Google Slides"], "'Alex Brush', cursive", {"Regular":400});

// Elegant Typefaces
let juliusSans = new Typeface("Julius Sans","Elegant", ["Heading", false, false], ["Canva", "Figma", "Google Slides"], "'Julius Sans One', sans-serif", {"Regular":400});
let playfair = new Typeface("Playfair Display","Elegant", ["Heading", false, false], ["Canva", "Figma", "Google Slides"], "'Playfair Display', serif", {"Regular":400, "Medium":500, "SemiBold": 600, "Bold": 700, "ExtraBold": 800, "Black": 900});
let montserrat = new Typeface("Montserrat","Elegant", ["Heading", "Sub-heading", "Paragraph"], ["Canva", "Figma", "Google Slides"], "'Montserrat', sans-serif", {"Thin": 100, "ExtraLight": 200, "Light": 300, "Regular":400, "Medium":500, "SemiBold": 600, "Bold": 700, "ExtraBold": 800, "Black": 900});

// Friendly Typefaces
let lato = new Typeface("Lato","Friendly",["Heading", "Sub-heading", "Paragraph"], ["Canva", "Figma", "Google Slides"], "'Lato', sans-serif", {"Thin": 100, "Light": 300, "Regular":400, "Bold": 700, "ExtraBold": 800, "Black": 900});
let openSans = new Typeface("Open Sans","Friendly", ["Heading", "Sub-heading", "Paragraph"], ["Canva", "Figma", "Google Slides"], "'Open Sans', sans-serif", {"Light": 300, "Regular":400, "Medium":500, "SemiBold": 600, "Bold": 700, "ExtraBold": 800});

// Assertive Typefaces
let rockwell = new Typeface("Rockwell","Assertive", ["Heading", "Sub-heading", false], ["Canva", "Figma", "Google Slides"], "'Rockwell', serif", {"Normal": 400, "Bold": 700});
let garamond = new Typeface("Garamond","Assertive", ["Heading", "Sub-heading", "Paragraph"], ["Canva", "Figma", "Google Slides"], "'EB Garamond', serif", {"Regular":400, "Medium":500, "SemiBold": 600, "Bold": 700, "ExtraBold": 800});
let impact = new Typeface("Impact","Assertive", ["Heading", false, false], ["Canva", false, "Google Slides"], "'Impact', sans-serif", {"Normal": 400, "Bold": 700});

// Playful Typefaces
let comicSans = new Typeface("Comic Sans","Playful", ["Heading", false, false], ["Canva", "Figma", "Google Slides"], "'Comic Sans MS', cursive", {"Normal": 400, "Bold": 700});
let lacquer = new Typeface("Lacquer","Playful", ["Heading", false, false], ["Canva", "Figma", "Google Slides"], "'Lacquer', sans-serif", {"Regular":400});
let barrio = new Typeface("Barrio","Playful", ["Heading", false, false], ["Canva", "Figma", "Google Slides"], "'Barrio', sans-serif", {"Regular":400});
let kranky = new Typeface("Kranky","Playful", ["Heading", false, false], ["Canva", false, "Google Slides"], "'Kranky', cursive", {"Regular":400});

// Array of Typeface Objects
let typefaceArray = [
    librebakerville, georgia, timesNewRoman, 
    arial, calibri, helvetica, 
    pacifico, lobster, tangerine, alexBrush, 
    juliusSans, playfair, montserrat, 
    lato, openSans,
    rockwell, garamond, impact,
    comicSans, lacquer, barrio, kranky];

let selectedMood = "";
let selectedFunc = "";
let selectedAvail = "";


function resetFilter(){
    // Clear input content
    document.querySelector("#user-input-text").value = "";

    // Clear filter options
    let parentMoodDiv = document.querySelector(".mood-options");
    for (let child of parentMoodDiv.children){
        child.classList.remove("clickedOption");  
    }

    let parentFuncDiv = document.querySelector(".functionality-options");
    for (let child of parentFuncDiv.children){
        child.classList.remove("clickedOption");  
    }

    let parentAvailDiv = document.querySelector(".availability-options");
    for (let child of parentAvailDiv.children){
        child.classList.remove("clickedOption");
    }

    // Clear typeface options
    let parentTypefaceListDiv = document.querySelector(".typeface-list");
    while (parentTypefaceListDiv.hasChildNodes()) {
        parentTypefaceListDiv.removeChild(parentTypefaceListDiv.firstChild);
      }

    displayTypefaceArray = [];
    let selectedFilterArray = [];
    saveToLocalStorage(displayTypefaceArray, selectedFilterArray);

    let userInput = "";
    saveUserInput(userInput);
}

// change style of options after clicking
function changeMood(element){
    let parentDiv = document.querySelector(".mood-options");
    for (let child of parentDiv.children){
        child.classList.remove("clickedOption");  
    }
    element.classList.toggle("clickedOption");

    selectedMood = element.innerHTML;
    filterTypefaces();
}

function changeFunc(element){
    let parentDiv = document.querySelector(".functionality-options");
    for (let child of parentDiv.children){
        child.classList.remove("clickedOption");  
    }
    element.classList.toggle("clickedOption");
    selectedFunc = element.innerHTML;

    filterTypefaces();
    
}

function changeAvail(element){
    let parentDiv = document.querySelector(".availability-options");
    for (let child of parentDiv.children){
        child.classList.remove("clickedOption");  
    }
    element.classList.toggle("clickedOption");
    selectedAvail = element.innerHTML;

    filterTypefaces();
}


// Filter out the list of typefaces based on users' need
function filterTypefaces(){
    let displayTypefaceArray = [];
    for (i = 0; i < typefaceArray.length; i++){
        let indiTypeface = typefaceArray[i];

        if (indiTypeface.mood === selectedMood){
            for (j = 0; j < indiTypeface.functionality.length; j++){
                let oneFunc = indiTypeface.functionality[j];
                if (oneFunc === selectedFunc){
                    for (z = 0; z < indiTypeface.availability.length; z++){
                        let oneAvail = indiTypeface.availability[z];
                        if (oneAvail === selectedAvail){
                            displayTypefaceArray.push(indiTypeface);

                        }
                    }
                }
            }
        }
    }
    displayTypefaces(displayTypefaceArray);
    let selectedFilterArray = [selectedMood, selectedFunc, selectedAvail];
    saveToLocalStorage(displayTypefaceArray, selectedFilterArray);
}

// Display a list of typefaces based on filters
function displayTypefaces(displayTypefaceArray){
    let userInput = document.querySelector("#user-input-text").value;
    let container = document.querySelector(".typeface-list");

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }

    for (i = 0; i < displayTypefaceArray.length; i++){
        // create a container for an individual typeface
        let oneTypefaceContainer = document.createElement("div");
        oneTypefaceContainer.classList.add("one-typeface-container");
        oneTypefaceContainer.setAttribute("id", displayTypefaceArray[i].name);
        container.appendChild(oneTypefaceContainer);

        // add link to individual typeface
        let typefaceLink = document.createElement("a");
        typefaceLink.classList.add("typeface-link");
        let typefaceName = displayTypefaceArray[i].name;
        typefaceLink.href = "typeface.html?name=" + typefaceName;
        oneTypefaceContainer.appendChild(typefaceLink);

        // display individual typefaces' name
        let newTypefaceName = document.createElement("p");
        newTypefaceName.innerText = displayTypefaceArray[i].name;
        newTypefaceName.classList.add("typeface-name");
        typefaceLink.appendChild(newTypefaceName);

        // display individual typefaces' content through users' input
        let newTypefaceContent = document.createElement("p");
        newTypefaceContent.innerText = userInput;
        if (userInput ===""){
            newTypefaceContent.innerText = "Sample Text";
            userInput = "Sample Text";
        }

        newTypefaceContent.style.fontFamily = displayTypefaceArray[i].fontFamily;

        newTypefaceContent.classList.add("typeface-content");
        typefaceLink.appendChild(newTypefaceContent);
    }
}

// Update the content of text based on users' input
function updateTextContent(){
    let textContent = document.getElementsByClassName("typeface-content");
    let userInput = document.querySelector("#user-input-text").value;

    for (i = 0; i<textContent.length; i++){
        if (userInput ===""){
            textContent[i].innerText = "Sample Text";
        }
        else{
            textContent[i].innerText = userInput;
        }
    }
    saveUserInput(userInput);
}

function saveToLocalStorage(displayTypefaceArray, selectedFilterArray){
    let typefaceString = JSON.stringify(displayTypefaceArray);
    localStorage.setItem("storedTypefaces", typefaceString);

    let filterString = JSON.stringify(selectedFilterArray);
    localStorage.setItem("storedFilter", filterString);
}

function saveUserInput(userInput){
    localStorage.setItem("storedUserInput", userInput);
}
