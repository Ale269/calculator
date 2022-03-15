let previusEquation = document.getElementById("previus-equation");
let currentEquation = document.getElementById("current-equation");

let arrNumber = [];
let previusNumber = "";
let actualNumber = "";
let operator = "";
let result = "";


// Function
    // do the calculation based on operator and number value
    function equation(previusNumber, actualNumber, operator) {
        switch(operator){
            case "x":
                result = previusNumber * actualNumber;
                break;
            case "/":
                result = previusNumber / actualNumber;
                break;
            case "+":
                result = previusNumber + actualNumber;
                break;
            case "-":
                result = previusNumber - actualNumber;
                break;
        }
    }


    function deleteNumber() {
        if(actualNumber === ""){
            arrNumber.pop();
            previusNumber = +arrNumber.join("");
            previusEquation.textContent = previusNumber;
            currentEquation.textContent = previusNumber;
        }else {
            arrNumber.pop();
            actualNumber = +arrNumber.join("");
            currentEquation.textContent = previusNumber;
        }
    }


    function clearAll() {
        previusNumber = "";
        arrNumber = [];
        previusEquation.textContent = previusNumber;
        currentEquation.textContent = previusNumber;
    }




// Events
    document.getElementById("number-operator").addEventListener("click", (events) => {
        // first selection must be a digit
        switch(previusNumber){
            case "":
                if(events.target.name === "number"){
                    let arrElement = events.target.value;
                    arrNumber.push(arrElement);
                    previusNumber = +arrNumber.join("");
                    previusEquation.textContent = previusNumber;
                    currentEquation.textContent = previusNumber;

                }else{
                    console.log("select a number");
                };
                break;
                // if a digit has been selected than: 
            default:
                // if a digit has been selected listen for an operator selection
                switch(operator){
                    // if after a digit the user select other digits, they must be linked in a number
                    case "":
                        if(events.target.name === "number"){
                            let arrElement = events.target.value;
                            arrNumber.push(arrElement);
                            previusNumber = +arrNumber.join("");
                            previusEquation.textContent = previusNumber;
                            currentEquation.textContent = previusNumber;
                        }
                        else if(events.target.name === "operator"){
                            operator = events.target.value;
                            previusEquation.textContent = previusNumber + " " + operator;
                            currentEquation.textContent = "";
                            arrNumber = [];
                        }
                        break;
                    // if a number and an operator has been selected than listen for another number
                    default: 
                        switch(actualNumber){
                            case "":
                                if(events.target.name === "number"){
                                    let arrElement = events.target.value;
                                    arrNumber.push(arrElement);
                                    actualNumber = +arrNumber.join("");
                                    previusEquation.textContent = previusNumber + " " + operator + " " + actualNumber;
                                    currentEquation.textContent = actualNumber;
                                }
                                else{
                                    console.log("select a number");
                                }
                                break;
                            default: 
                                if(events.target.name === "number"){
                                    let arrElement = events.target.value;
                                    arrNumber.push(arrElement);
                                    actualNumber = +arrNumber.join("");
                                    previusEquation.textContent = previusNumber + " " + operator + " " + actualNumber;
                                    currentEquation.textContent = actualNumber;
                                }
                                // if an operator is selected keep doing the equation with the result 
                                else if(events.target.name === "operator"){
                                    equation(previusNumber, actualNumber, operator);
                                    previusNumber = result;
                                    operator = events.target.value;
                                    actualNumber = "";
                                    previusEquation.textContent = previusNumber + " " + operator;
                                    currentEquation.textContent = "";
                                    arrNumber = [];
                                }
                                // if equal is selected change the disply of result
                                else if (events.target.name === "equal"){
                                    equation(previusNumber, actualNumber, operator);
                                    previusEquation.textContent = previusNumber + " " + operator + " " + actualNumber + " =";
                                    currentEquation.textContent = result;
                                    actualNumber = "";
                                    arrNumber = Array.from(String(result), Number);
                                    operator = "";
                                    previusNumber = result; 
                                }
                        }
                }
        }
    })


    document.getElementById("deleteBTN").addEventListener("click", deleteNumber);

    document.getElementById("clearBTN").addEventListener("click", clearAll);




