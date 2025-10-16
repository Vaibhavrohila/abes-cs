const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const output= document.getElementById("output");
console.log(num1);
console.log(num2);
function add() {
    if (num1.value === "" || num2.value ==="") {
        error.innerText = "Please enter both numbers";
    }

    const op=parseFloat(num1.value) + parseFloat(num2.value);
    output.innerHTML=op;
}

function sub() {
    console.log(num1.value);
    console.log(num2.value);
    const op=parseFloat(num1.value) - parseFloat(num2.value);
    output.innerHTML=op;
}
function mul() {
    console.log(num1.value);
    console.log(num2.value);
    const op=parseFloat(num1.value) * parseFloat(num2.value);
    output.innerHTML=op;
}

function div() {
    console.log(num1.value);
    console.log(num2.value);
    const op=parseFloat(num1.value) / parseFloat(num2.value);
    output.innerHTML=op;
}