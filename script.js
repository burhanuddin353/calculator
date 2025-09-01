function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

let num1 = null;
let num2 = null;
let operator = null;

function clear() {
    num1 = null;
    num2 = null;
    operator = null;
    display(0);
}

function checkAndUpdateDisplay() {
    if (operator != null && num1 != null && num2 != null) {
        num1 = operate(operator, num1, num2);
        num2 = null;
        display(num1);
    } 
}

function equal() {

}

const output = document.querySelector("#output");
const digit = document.querySelector("#container");

function display(number) {
    output.textContent = number;
}

digit.addEventListener("click", e => {
    console.log(e);
    switch (e.target.id) {
        case "one":
        case "two":
        case "three":
        case "four":
        case "five": 
        case "six":
        case "seven":
        case "eight":
        case "nine":
        case "zero":
            let digit = +e.target.textContent;
            if (num1) {
                num2 = digit; 
            } else {
                num1 = digit;
            }
            display(digit);
            break;
        case "add":
            checkAndUpdateDisplay();
            operator = add;
            break;
        case "minus":
            checkAndUpdateDisplay();;
            operator = subtract;
            break;
        case "multiply":
            checkAndUpdateDisplay();
            operator = multiply;
            break;
        case "divide":
            checkAndUpdateDisplay();
            operator = divide;
            break;
        case "equal":
            checkAndUpdateDisplay();
            break;
        case "clear":
            clear();
            break;
        default: break;
    }
});