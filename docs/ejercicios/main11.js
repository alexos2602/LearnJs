function insertarNombre(evt) {
    evt.preventDefault();

    let nombre = document.getElementById("nombre").value;

    if (nombre == "") {
        alert("Campo vacio");
    } else {
        let opcion = "<li>" + nombre + "</li>";

        let lista = document.getElementById("listaNombres");

        lista.innerHTML += opcion; 

        alert("Se ha insertado nombre")
    }
}