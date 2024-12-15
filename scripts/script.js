let num1 = null;
let num2 = null;
let result= null;
let operator = null;
let cont = 0;
let checkOperator = false;
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const clickEvent = (event) => {
    //console.log(event);
   if (event.target.className === "btn operator"){
    if(!checkOperator){
        operator = event.target.id;
        //Equals to number 2 if you click 2 times
        num2  = num1;
        checkOperator = true;
    }else{
        //Execute function equal if you click 2 times an operator
        
    }
   }else if (event.target.className === "btn"){
    setNumber(event.target.id, checkOperator);
   }
};
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", clickEvent);
});
function setNumber(id, checkOperator){
    //Check if is the first number or the second
    console.log(id);
    if (!checkOperator){
        num1 = (num1*10)+parseInt(id);
        cont++;
        displayNumber(num1);
    }else {

    }
}

function displayNumber(numToDysplay){
    display.textContent=numToDysplay;
}

function operate(num1,num2,operator){
    
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
    displayNumber(result);
}
