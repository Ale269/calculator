let arr = [];

document.getElementById("number-operants").addEventListener("click", (events) => {
    console.log(events.target.name);
    if(events.target.name === "number"){
        let number = Number(events.target.value);
        arr.push(number);
    }
    let newNumber = +arr.join("");
    console.log(newNumber);
})


