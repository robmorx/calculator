let num = 0;
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const sum = document.querySelector("#+");
const numberToDisplay = document.createElement("span");

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        saveNumber(parseInt(button.id));
    });
});

function siguiente(event) {
    event.id;

  }

function saveNumber(numToSave) {  
    num = (num*10)+ numToSave;
    
    
    
}

function operate(num1,num2,operator){
    let result=0;
    switch (operator) {
        case "+":
            result = num1+num2;
        break;
        case "-":
            result = num1-num2;
        break;
        case "*":
            result = num1*num2;
        break;
        case "/":
            result = num1/num2;
        break;
        default:
            break;
    }
    return result;
}
sum.onclick=siguiente(sum);
