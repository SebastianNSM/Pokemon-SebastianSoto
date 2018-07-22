'use strict';
let tbody = document.querySelector('#tblPokemon tbody');
let listaPokemon = obtenerListaPokemon();
createOptions();
mostrarPokemones();


let inputFiltroNombre = document.querySelector('#txtFiltroNombre');
let inputFiltroTipo = document.querySelector('#txtFiltroTipo');
let inputFiltroTipoSecundario = document.querySelector('#txtFiltroTipoSecundario');
// Funcion que imprime segun el tipo primario
function mostrarPokemonesTipo(pFiltroTipo) {
    tbody.innerHTML = '';
    for (let i = 0; i < listaPokemon.length; i++) {
        if (listaPokemon[i]['primer_tipo_pokemon'].toLowerCase().includes(pFiltroTipo.toLowerCase())) {
            imprimirInfo(i);
        }
    };
};

// Funcion que imprime segun el tipo secundario
function mostrarPokemonesTipoSecundario(pFiltroTipo2) {
    tbody.innerHTML = '';
    let listaTipo2 = checkType2(pFiltroTipo2);

    for (let i = 0; i < listaTipo2.length; i++) {

        let fila = tbody.insertRow();

        let cFoto = fila.insertCell();
        let cNombre = fila.insertCell();
        let cCodigo = fila.insertCell();
        let cTipo1 = fila.insertCell();
        let cTipo2 = fila.insertCell();

        let imagen = document.createElement('img');
        imagen.src = getImgUrl(listaTipo2[i]['foto_pokemon']);
        imagen.classList.add('imageSettings');
        cFoto.appendChild(imagen);


        // Crea spans para que asi se pueda centrar el texto
        let nombreSpan = crearSpan(listaTipo2[i]['nombre_pokemon']);
        let codigoSpan = crearSpan(listaTipo2[i]['codigo_pokemon']);
        cNombre.appendChild(nombreSpan);
        cCodigo.appendChild(codigoSpan);

        createToolTip(listaTipo2[i]['primer_tipo_pokemon'], cTipo1);
        createToolTip(listaTipo2[i]['segundo_tipo_pokemon'], cTipo2);

    };
};

function crearSpan(pInfo) {
    let nuevoSpan = document.createElement('span');
    nuevoSpan.textContent = pInfo;
    return nuevoSpan;
}

function checkType2(pFiltroTipo2) {
    let listaTipo2 = [];
    for (let i = 0; i < listaPokemon.length; i++) {
        if ((listaPokemon[i]['segundo_tipo_pokemon'] != undefined) && (listaPokemon[i]['segundo_tipo_pokemon'].toLowerCase().includes(pFiltroTipo2.toLowerCase()))) {
            listaTipo2.push(listaPokemon[i]);
        }
    }
    return listaTipo2;
}

// funcion que imprime segun el nombre y por defecto al inicio
function mostrarPokemones(pFiltroNombre) {
    if (!pFiltroNombre) {
        pFiltroNombre = '';
    }
    tbody.innerHTML = '';
    for (let i = 0; i < listaPokemon.length; i++) {
        if (listaPokemon[i]['nombre_pokemon'].toLowerCase().includes(pFiltroNombre.toLowerCase())) {
            imprimirInfo(i);
        }
    }
};

// Esta funcion imrpime la informacion de la tabla
function imprimirInfo(i) {
    let fila = tbody.insertRow();

    let cFoto = fila.insertCell();
    let cNombre = fila.insertCell();
    let cCodigo = fila.insertCell();
    let cTipo1 = fila.insertCell();
    let cTipo2 = fila.insertCell();

    let imagen = document.createElement('img');
    imagen.src = getImgUrl(listaPokemon[i]['foto_pokemon']);
    imagen.classList.add('imageSettings');
    cFoto.appendChild(imagen);
    let nombreSpan = crearSpan(listaPokemon[i]['nombre_pokemon']);
    let codigoSpan = crearSpan(listaPokemon[i]['codigo_pokemon']);
    cNombre.appendChild(nombreSpan);
    cCodigo.appendChild(codigoSpan);

    createToolTip(listaPokemon[i]['primer_tipo_pokemon'], cTipo1);
    createToolTip(listaPokemon[i]['segundo_tipo_pokemon'], cTipo2);
};

// Funcion que indica el tipo de forma escrita con un hover
function createToolTip(primerTipo, primerCelda) {
    let pathTypes = "../img/Types/";
    let pTipo = primerTipo;

    if (pTipo == null) {
        let tipoSpan = crearSpan("-");
        primerCelda.appendChild(tipoSpan);
    } else {
        let span = document.createElement('span');
        span.textContent = pTipo;
        span.classList.add('tooltiptext');

        let element = document.createElement('img');
        element.src = pathTypes + pTipo.toLowerCase() + ".png";

        let pDiv = document.createElement('div');
        pDiv.classList.add('tooltip');
        pDiv.appendChild(span);
        pDiv.appendChild(element);

        primerCelda.appendChild(pDiv);
    }
};

// Funcionq ue crea las opciones del filtro de tipos
function createOptions() {
    let arregloTipos = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psycic', 'Rock', 'Steel', 'Water'];
    let listTipos = document.querySelector('#dtlTypeList');

    for (let i = 0; i < arregloTipos.length; i++) {
        let opcion = new Option(arregloTipos[i]);
        opcion.value = arregloTipos[i];
        listTipos.appendChild(opcion);
    }
};

// Funcion que captura la foto de cloudinary (el src)
function getImgUrl(id) {
    let url = "http://res.cloudinary.com/sebastiansm/image/upload/";
    let imgUrl = url + id;

    return imgUrl;
};

function resetSearchHeight(){
    $("html, body").animate({ scrollTop: "168px" });
}

inputFiltroNombre.addEventListener('keyup', function () {
    mostrarPokemones(inputFiltroNombre.value);
    resetSearchHeight();
});
inputFiltroTipo.addEventListener('keyup', function () {
    mostrarPokemonesTipo(inputFiltroTipo.value);
    resetSearchHeight();
});
inputFiltroTipoSecundario.addEventListener('keyup', function () {
    mostrarPokemonesTipoSecundario(inputFiltroTipoSecundario.value);
    resetSearchHeight();
});