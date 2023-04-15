let formulario = document.getElementById("formulario"),
mostrar = document.getElementById("btnMostrar");
formulario.addEventListener("submit", cargarTarea);
mostrar.addEventListener("click", mostrarLista);
let seccionPadre = document.querySelector("#contenedorPadre");

let tareas = [];
let bandera = false;

function cargarTarea(e) {
    e.preventDefault();
    let tarea = document.getElementById('cargaTarea').value;
    // console.log(tarea);
    tareas.push(tarea)
    formulario.reset();
    console.log(tareas);
}

function mostrarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; // Limpiamos la lista antes de volver a mostrarla

    if (tareas.length === 0) {
        lista.innerHTML = `<div class="alert alert-danger my-3"><i class="bi bi-exclamation-circle-fill"></i> No hay tareas cargadas.</div>`;
        bandera = true;
    } else if (tareas.length > 0) {
        if (bandera === true) {
            lista.removeChild(lista.children[0]);
            bandera = false;
        }
        for (let i = 0; i < tareas.length; i++) {
            let li = document.createElement("li");
            li.textContent = tareas[i];
            let botonEliminar = document.createElement("div");
            botonEliminar.innerText = "Eliminar";
            botonEliminar.className += "mx-3 btn btn-outline-danger"; // Agregamos una clase al botón para estilizarlo
            botonEliminar.addEventListener("click", function() {
                // Añadimos un evento de click al botón para eliminar la tarea
                eliminarTarea(i);
            });
            li.appendChild(botonEliminar); // Añadimos el botón al elemento de lista
            lista.appendChild(li); // Añadimos el elemento de lista a la lista
        }
    }
}
function eliminarTarea(posicion) {
    tareas.splice(posicion, 1); // Eliminamos la tarea del arreglo en la posición indicada
    mostrarLista(); // Actualizamos la lista de tareas en la página
}
