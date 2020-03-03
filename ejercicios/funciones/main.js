let num1 = prompt("Ingresan un 1 numero");
let num2 = prompt("Ingresan un 2 numero");

let aleatorio = generaAleatorio(num1, num2);
alert(aleatorio);

if (esNumero(num1) && esNumero(num2)) {
    alert("es un numero")
} else {
    alert("No es un numero")
}

