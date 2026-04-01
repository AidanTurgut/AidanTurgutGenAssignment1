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
