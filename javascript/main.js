let previusEquation = document.getElementById("previus-equation");
let currentEquation = document.getElementById("current-equation");

let arrNumber = [];
let previusNumber = "";
let actualNumber = "";
let operator = "";
let result = "";

document.getElementById("number-operator").addEventListener("click", (events) => {
    switch(previusNumber){
        case "":
            if(events.target.name === "number"){
                let arrElement = events.target.value;
                arrNumber.push(arrElement);
                previusNumber = +arrNumber.join("");
                previusEquation.textContent = previusNumber;

            }else{
                console.log("select a number");
            };
            break;
        default:
            switch(operator){
                case "":
                    if(events.target.name === "number"){
                        let arrElement = events.target.value;
                        arrNumber.push(arrElement);
                        previusNumber = +arrNumber.join("");
                        previusEquation.textContent = previusNumber;
                    }
                    else if(events.target.name === "operator"){
                        console.log("prev " + previusNumber + "; actual " + actualNumber + "; operator " + operator);

                        operator = events.target.value;
                        previusEquation.textContent = previusNumber + " " + operator;
                        arrNumber = [];
                    }
                    break;
                default: 
                    switch(actualNumber){
                        case "":
                            if(events.target.name === "number"){
                                let arrElement = events.target.value;
                                arrNumber.push(arrElement);
                                actualNumber = +arrNumber.join("");
                                previusEquation.textContent = previusNumber + " " + operator + " " + actualNumber;
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
                            }
                            else if(events.target.name === "operator"){
                                console.log("prev " + previusNumber + "; actual " + actualNumber + "; operator " + operator);
                    
                                equation(previusNumber, actualNumber, operator);
                    
                                previusNumber = result;
                                operator = events.target.value;
                                actualNumber = "";
                                previusEquation.textContent = previusNumber + " " + operator;
                                arrNumber = [];
                            }else if (events.target.name === "equal"){
                                equation(previusNumber, actualNumber, operator);
                                previusEquation.textContent = previusNumber + " " + operator + " " + actualNumber + " =";
                                actualNumber = "";
                                operator = "";
                                previusNumber = result;
                                
                            }
                    }
            }
    }
})


function equation(previusNumber, actualNumber, operator) {
    switch(operator){
        case "x":
            result = previusNumber * actualNumber;
            console.log(result);
            console.log("prev " + previusNumber + "; actual " + actualNumber + "; operator " + operator);
            break;
        case "/":
            result = previusNumber / actualNumber;
            console.log(result);
            console.log("prev " + previusNumber + "; actual " + actualNumber + "; operator " + operator);
            break;
        case "+":
            result = previusNumber + actualNumber;
            console.log(result);
            console.log("prev " + previusNumber + "; actual " + actualNumber + "; operator " + operator);
            break;
        case "-":
            result = previusNumber - actualNumber;
            console.log(result);
            console.log("prev " + previusNumber + "; actual " + actualNumber + "; operator " + operator);
            break;
    }
}




