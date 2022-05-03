const purple = document.querySelector("#purple") as HTMLButtonElement;
const red = document.querySelector("#red") as HTMLButtonElement;
const redOrange = document.querySelector("#redOrange") as HTMLButtonElement;
const orange = document.querySelector("#orange") as HTMLButtonElement;
const yellow = document.querySelector("#yellow") as HTMLButtonElement;
const yellowGreen = document.querySelector("#yellowGreen") as HTMLButtonElement;
const green = document.querySelector("#green") as HTMLButtonElement;
const lightBlue = document.querySelector("#lightBlue") as HTMLButtonElement;
const blue = document.querySelector("#blue") as HTMLButtonElement;
const lightPurple = document.querySelector("#lightPurple") as HTMLButtonElement;

function printColoredItem (event : MouseEvent){
    let clickedColor = event.currentTarget as HTMLElement
    let input = document.querySelector("#input") as HTMLInputElement;
    let paragraph = document.querySelector("#listItem") as HTMLParagraphElement;
    paragraph.textContent += input.value + "\n"
    paragraph.style.color = 
    input.value = ""
    
}





// when btn is clicked, get color and get input

// change text color of input to btn clicked

// display text onto screen