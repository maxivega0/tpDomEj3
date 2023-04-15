let formulario = document.getElementById("formulario"),
mostrar = document.getElementById("btnMostrar");
formulario.addEventListener("submit", cargarTarea);
mostrar.addEventListener("click", mostrarLista);
let tareas = [];

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
    lista.innerHTML = "";
    if (tareas.length === 0) {
        let mensaje = document.createElement("div");
        mensaje.className = "alert alert-danger my-3";
        mensaje.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> No hay tareas cargadas.`;
        lista.appendChild(mensaje);
    } else if (tareas.length > 0) {
        for (let i = 0; i < tareas.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = tareas[i];
            let botonEliminar = document.createElement("div");
            botonEliminar.innerHTML = "Eliminar";
            botonEliminar.className += "mx-3 btn btn-outline-danger";
            botonEliminar.addEventListener("click",()=>eliminarTarea(i));
            li.appendChild(botonEliminar);
            lista.appendChild(li);
        }
    }
}
function eliminarTarea(posicion) {
    tareas.splice(posicion, 1); 
    mostrarLista();
}
