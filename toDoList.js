var purple = document.querySelector("#purple");
var red = document.querySelector("#red");
var redOrange = document.querySelector("#redOrange");
var orange = document.querySelector("#orange");
var yellow = document.querySelector("#yellow");
var yellowGreen = document.querySelector("#yellowGreen");
var green = document.querySelector("#green");
var lightBlue = document.querySelector("#lightBlue");
var blue = document.querySelector("#blue");
var lightPurple = document.querySelector("#lightPurple");
function printColoredItem(event) {
    var clickedColor = event.currentTarget;
    var input = document.querySelector("#input");
    var paragraph = document.querySelector("#listItem");
    paragraph.textContent += input.value + "\n";
    paragraph.style.color = clickedColor.dataset; //////;
    input.value = "";
}
// when btn is clicked, get color and get input
// change text color of input to btn clicked
// display text onto screen
