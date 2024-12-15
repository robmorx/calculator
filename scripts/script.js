let num1 = null;
let num2 = null;
let result= null;
let operator = null;
let checkOperator = false;
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const clickEvent = (event) => {
    //console.log(event);
   if (event.target.className === "btn operator"){
      //if (number){  
        if(event.target.id !== operator){
            operator = event.target.id;
            //Equals to number 2 if you click 2 times
            checkOperator = true;
        }else{
            num2=num1;
            //Execute function equal if you click 2 times an operator
            operate(num1,num2,operator);
            clear();
       // }
    }
   }else if (event.target.className === "btn equal"){
    if(checkOperator){
        operate(num1,num2,operator);
        clear();
        
    }
   }else if (event.target.className === "btn dot"){

   }else if(event.target.className === "btn backspace"){  
    //if(checkOperator)
   }else{
    setNumber(event.target.id, checkOperator);
   }
};
buttons.forEach((button) => {
    //for each one we add a 'click' listener
    button.addEventListener("click", clickEvent);
});
function setNumber(id, checkOperator){
    //Check if is the first number or the second
    console.log(id);
    if (!checkOperator){
        
        num1 = (num1*10)+parseInt(id);
        displayNumber(num1);
    }else {
        num2 = (num2*10)+parseInt(id);
        displayNumber(num2);
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
    result=0;
}
function clear(){
    num1= null;
    num2 = null;
    result= null;
    operator = "";
    checkOperator = false;
}