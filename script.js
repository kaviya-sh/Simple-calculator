// script.js

let display = document.getElementById('display');

// Add number/operator to display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
