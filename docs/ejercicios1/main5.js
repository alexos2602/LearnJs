function añadirTexto() {
    var texto =  document.getElementById("texto")
    var mostrar = document.getElementById("mostrarTexto")

    mostrar.innerHTML += texto.value;
}