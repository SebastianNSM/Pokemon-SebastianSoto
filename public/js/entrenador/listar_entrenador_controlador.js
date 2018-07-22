let tbody = document.querySelector('#tblEntrenador tbody');
let listaEntrenador = obtenerListaEntrenadores();
mostrarEntrenadores();

let inputFiltro = document.querySelector('#txtFiltroNombre');

function mostrarEntrenadores(pFiltro) {
    tbody.innerHTML = '';
    if (!pFiltro) {
        pFiltro = '';
    }
    for (let i = 0; i < listaEntrenador.length; i++) {
        if (listaEntrenador[i]['nombre_entrenador'].toLowerCase().includes(pFiltro.toLowerCase())) {
            let fila = tbody.insertRow();

            let cFoto = fila.insertCell();
            let cNombre = fila.insertCell();
            let cNumero = fila.insertCell();
            let cEdad = fila.insertCell();
            let cSexo = fila.insertCell();
            let cCaptura = fila.insertCell();

            let imagen = document.createElement('div');
            imagen.style.backgroundImage = "url('"+ getImgUrl( listaEntrenador[i]['foto_entrenador']) +"')";
            cFoto.appendChild(imagen);

            let nombreSpan = crearSpan(listaEntrenador[i]['nombre_entrenador']);
            let numeroSpan = crearSpan(listaEntrenador[i]['numero_entrenador']);
            let edadSpan = crearSpan(listaEntrenador[i]['edad_entrenador']);
            let sexoSpan = crearSpan(listaEntrenador[i]['sexo_entrenador']);
            cNombre.appendChild(nombreSpan);
            cNumero.appendChild(numeroSpan);
            cEdad.appendChild(edadSpan);
            cSexo.appendChild(sexoSpan);

            let capturaSpan = document.createElement('span');
            capturaSpan.classList.add('far');
            capturaSpan.classList.add('fa-dot-circle');

            cCaptura.appendChild(capturaSpan);
        }
    };
};


// Funcion que recibe un parametro y crea un span con ese texto.
function crearSpan(pInfo) {
    let nuevoSpan = document.createElement('span');
    nuevoSpan.textContent = pInfo;
    return nuevoSpan;
}