'use strict';
let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombrePokemon = document.querySelector('#txtNombrePokemon');
let inputCodigoPokedex = document.querySelector('#txtNumeroPokedex');


let regexPokemon = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9 ]+$/;
let regexCodigo = /^[a-zA-Z0-9]+$/;

let idFoto = "";
let sNombre = "";
let nCodigo = "";
let sTipo1 = "";
let sTipo2 = "";

function obtenerDatos() {
    let infoPokemon = [];
    let listaTipos = getTipos();
    // Esta es una funcion de imagen_pokemon_servicio.js
    // Permite acceder al imgID y no su url.
    idFoto = getImgID();
    sNombre = inputNombrePokemon.value;
    nCodigo = inputCodigoPokedex.value;
    sTipo1 = listaTipos[0];
    sTipo2 = listaTipos[1];
    
    let bError = false;
    bError = validar();

    if (bError) {
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el pokémon, verifique que completó correctamente la información que se le solicita',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    } else {
        
        infoPokemon.push(idFoto, sNombre, nCodigo, sTipo1, sTipo2);
        registrarPokemon(infoPokemon);
    }
    
};


function validar() {
    let bError = false;

    idFoto = getImgID();
    sNombre = inputNombrePokemon.value;
    nCodigo = inputCodigoPokedex.value;

    // Validacion para el nombre
    if (regexPokemon.test(sNombre) == false || sNombre.value == "") {
        bError = true;
        inputNombrePokemon.classList.add('errorInput');
    } else {
        inputNombrePokemon.classList.remove('errorInput');
    };

    if (regexCodigo.test(nCodigo) == false || nCodigo.value == "") {
        bError = true;
        inputCodigoPokedex.classList.add('errorInput');
    } else {
        inputCodigoPokedex.classList.remove('errorInput');
    };

    if (idFoto == "") {
        bError = true;
        swal({
            title: 'Foto faltante',
            text: 'Cada pokémon necesita una foto para ser identificado, verifique haberle adjuntado una.',
            type: 'warning',
            confirmButtonText: 'Entendido' 
        });
    }
    return bError;
};

function limpiarFormulario() {
    inputNombrePokemon.value = "";
    inputCodigoPokedex.value = "";
    resetImg();
    clearTipos();
};