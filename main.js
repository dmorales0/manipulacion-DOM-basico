const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btn-calcular");
const presult = document.querySelector("#result");
const form = document.querySelector("#formulario");

form.addEventListener("click", sumarInputsValues)

function sumarInputsValues(event){
    const sumaInput =input1.value + input2.value;
    presult.innertext = "resultado: " + sumaInput;
}