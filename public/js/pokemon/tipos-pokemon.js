'use strict';
// En este js se imprimen todas las opciones que van a estar en el datalist que se perensetan en la data list de tipos. y se genera el formulario popup.

// Los tipos que han sido registrados y van a la base de datos
let tiposAgregados = [];

// Esta funcion es para eliminar un tipo enc aso de ser seleccionado
let primerTipo = document.querySelector('#tipo1');
let segundoTipo = document.querySelector('#tipo2');

// Este es el contenedor
let listaAgregados = document.querySelector('#pokemonTypeList');

// Arreglo con los tipos de pokemon
let arregloTipos = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psycic', 'Rock', 'Steel', 'Water'];
let pathTipos = "../img/Types/";

// El fondo del popup
let popup = document.querySelector('.popup-bg');

// El boton de agregar tipos
let botonTipos = document.querySelector('#btnTipos');
// El boton dentro del popup
let botonAgregar = document.querySelector('#btnAgregar');

function getTipos() {
    return tiposAgregados;
}
function clearTipos() {
    tiposAgregados = [];
    listaAgregados.innerHTML = '';
}


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

    let inputTipo = document.querySelector('#txtType');

    if (inputTipo.value == "") {
        swal({
            title: '¿Y el tipo?',
            text: 'No has elegido un tipo para agregarle al nuevo pokémon',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    } else {
        // Esto transforma el valor del input y lo concatena para poder tirar la imagen png
        let imgTipoFileName = inputTipo.value.toLowerCase();
        let imgTipoPath = pathTipos + imgTipoFileName + ".png";

        let divTipo = document.createElement('div');
        divTipo.id = "tipo" + Number(tiposAgregados.length+1);

        let newImg = document.createElement('img');
        newImg.src = imgTipoPath;

        let newH4 = document.createElement('h4');
        let sTipo = inputTipo.value;
        newH4.textContent = sTipo;

        
        
        divTipo.appendChild(newImg);
        divTipo.appendChild(newH4);

        tiposAgregados.push(sTipo);

        listaAgregados.appendChild(divTipo);

        // Esta validacion es por si ya se agregaron los dos tipos
        if (tiposAgregados.length == 2) {
            popup.style.display = "none";
        }

        // Limpia el formulario cada vez que se elige un tipo
        inputTipo.value = "";
    }
};

listaAgregados.addEventListener('click', function(){
    if(listaAgregados.innerHTML != null){
        let eTipo1 = document.querySelector('#tipo1');
        let eTipo2 = document.querySelector('#tipo2');
        eTipo1.addEventListener('click', function(){
            listaAgregados.removeChild(eTipo1);
            tiposAgregados.splice(0,1);
        });
        eTipo2.addEventListener('click', function(){
            listaAgregados.removeChild(eTipo2);
            tiposAgregados.splice(1,1);
        });
    }
});

// Estas funciones son para el funcinamiento normal del formulario
// Estas funciones son para el funcinamiento normal del formulario
// Estas funciones son para el funcinamiento normal del formulario

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

// Estas funciones son para el funcinamiento normal del formulario
// Estas funciones son para el funcinamiento normal del formulario
// Estas funciones son para el funcinamiento normal del formulario