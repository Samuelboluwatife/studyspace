const display = document.getElementById('display')
const toggleButton = document.getElementById('theme-toggle');
const calculator = document.getElementById('calculator');

function appendTodisplay(input){
 display.value += input
}

function calculate(){
 try {
    display.value= eval(display.value);
 } catch (error) {
    display.value = "syntax error"
 }

}

function clearDisplay(){
 display.value = "";
}



