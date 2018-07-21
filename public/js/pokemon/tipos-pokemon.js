'use strict';
// En este js se imprimen todas las opciones que van a estar en el datalist que se perensetan en la data list de tipos. y se genera el formulario popup.

// Los tipos que han sido registrados y van a la base de datos
let tiposAgregados = [];
function getTipos(){
    return tiposAgregados;
}
function clearTipos(){
    tiposAgregados = [];
}

// Arreglo con los tipos de pokemon
let arregloTipos = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psycic', 'Rock', 'Steel', 'Water'];
let pathTipos = "../img/Types/";

// El fondo del popup
let popup = document.querySelector('.popup-bg');

// El boton de agregar tipos
let botonTipos = document.querySelector('#btnTipos');
// El boton dentro del popup
let botonAgregar = document.querySelector('#btnAgregar');

botonAgregar.addEventListener('click', function () {
    if (tiposAgregados.length < 2) {
        agregarTipo();
    } else {
        swal({
            title: 'No agregado',
            text: 'Ya registraste el máximo de tipos posibles para un pokémon',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
        $('.swal2-confirm').click(function () {
            popup.style.display = "none";
        });
    }
});

function agregarTipo() {
    // Este es el contenedor
    let listaAgregados = document.querySelector('#pokemonTypeList');

    // Este es el input donde se elige el tipo a agregar
    let inputTipo = document.querySelector('#txtType');

    // Esto transforma el valor del input y lo concatena para poder tirar la imagen png
    let imgTipoFileName = inputTipo.value.toLowerCase();
    let imgTipoPath = pathTipos + imgTipoFileName + ".png";

    let newImg = document.createElement('img');
    let newH4 = document.createElement('h4');

    if (inputTipo.value == "") {
        swal({
            title: '¿Y el tipo?',
            text: 'No has elegido un tipo para agregarle al nuevo pokémon',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    } else {
        let sTipo = inputTipo.value;
        newImg.src = imgTipoPath;
        listaAgregados.appendChild(newImg);
        newH4.textContent = sTipo;
        listaAgregados.appendChild(newH4);
        tiposAgregados.push(sTipo);
        if (tiposAgregados.length == 2) {
            popup.style.display = "none";
        }
        inputTipo.value = "";
    }
};

// Aparece el formulario
botonTipos.addEventListener('click', function () {
    if (tiposAgregados.length < 2) {
        document.querySelector('.popup-bg').style.display = 'block';
    } else {
        swal({
            title: '¡Ni lo intentes!',
            text: 'Ya registraste el máximo de tipos posibles para un pokémon',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
        $('.swal2-confirm').click(function () {
            popup.style.display = "none";
        });
    }

});

// Si el usuario le da click fuera del formulario se sale.
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

createOptions();
function createOptions() {
    let listTipos = document.querySelector('#dtlTypeList');

    for (let i = 0; i < arregloTipos.length; i++) {
        let opcion = new Option(arregloTipos[i]);
        opcion.value = arregloTipos[i];

        listTipos.appendChild(opcion);
    }
};