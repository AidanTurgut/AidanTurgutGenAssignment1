function add(){
    let num1 = parseFloat(document.getElementById("additionInput1").value);
    let num2 = parseFloat(document.getElementById("additionInput2").value);
    document.getElementById("additionResult").textContent = num1 + num2;
}
function subtract(){
    let num1 = parseFloat(document.getElementById("subtractionInput1").value);
    let num2 = parseFloat(document.getElementById("subtractionInput2").value);
    document.getElementById("subtractionResult").textContent = num1 - num2;
}
function multiply(){
    let num1 = parseFloat(document.getElementById("multiplicationInput1").value);
    let num2 = parseFloat(document.getElementById("multiplicationInput2").value);
    document.getElementById("multiplicationResult").textContent = num1 * num2;
}
function divide(){ 
    let num1 = parseFloat(document.getElementById("divisionInput1").value);
    let num2 = parseFloat(document.getElementById("divisionInput2").value);
    if(num2 === 0){
        document.getElementById("divisionResult").textContent = "Cannot divide by zero";
    } else {
        document.getElementById("divisionResult").textContent = num1 / num2;
    }
}