function mayorNumero() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (num1 && num2) {
        if (num1 >= num2) {
            if (num1 == num2) {
                alert("Los numeros son iguales")
            } else {
                alert("Num1 es mayor")
            }
        } else {
            alert("Num2 es mayor")
        } 
    } else {
        alert("Unos de los campos esta vacio")
    }

}