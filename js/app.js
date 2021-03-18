/*
    DOM HANDLING VARIABLES
*/
const colorPalets = document.querySelectorAll(".container__color-panel");
const rgbDisplay = document.getElementById("guess_color");
const displayAnswer = document.getElementById("display_answer");
const h1 = document.querySelector("h1");
const button_mode = document.querySelectorAll(".btn_mode");


let shownColorPalet = 6;
let pickedColor;






for (let i = 0; i < colorPalets.length; i++) {

    setButtonModes()

    //Assigning random colors to palets
    colorPalets[i].style.backgroundColor = generateRandomColors();


    //picking a random color to display
    pickedColor = pickARandomColor();
    rgbDisplay.textContent = pickedColor;
    //clicklistener on the Palets

    colorPalets[i].addEventListener("click", () => {

        const clickedColor = colorPalets[i].style.backgroundColor
      
        if (pickedColor === clickedColor) {
            //Display Correct Message
            displayAnswer.textContent = "Correct!";
            //Change all other palets to match selected color & h1
            changeAllPalets(pickedColor);
            h1.style.backgroundColor = pickedColor
        } else {
            displayAnswer.textContent = "Wrong!"
        }
    })


    colorPalets[i].addEventLis
}


/*
Generate random colors and assign them to 
the available Palets
*/

function generateRandomColors() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

/*
Picking a random color
*/

function pickARandomColor() {
    const color = Math.floor(Math.random() * colorPalets.length);
    return colorPalets[color].style.backgroundColor;
}

function changeAllPalets(chosenColor){
    for(let i=0; i<colorPalets.length; i++){
        colorPalets[i].style.backgroundColor= chosenColor;
    }
}

/*
Implement listeners on difficulty Buttons 
*/

function setButtonModes(){
    button_mode.forEach(el =>{
        el.addEventListener("click", ()=>{
            el.textContent == "Easy" ? shownColorPalet = 3 : shownColorPalet = 6;

            console.log(shownColorPalet);
        })
    })
}








