'use strict';
let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombrePokemon = document.querySelector('#txtNombrePokemon');
let inputCodigoPokedex = document.querySelector('#txtNumeroPokedex');


let regexSoloLetras = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
let regexCodigo = /^[a-zA-Z0-9]+$/;

let idFoto = "";
let sNombre = "";
let sCodigo = "";
let sTipo1 = "";
let sTipo2 = "";

function obtenerDatos() {
    let infoPokemon = [];
    let listaTipos = getTipos();
    // Esta es una funcion de imagen_pokemon_servicio.js
    // Permite acceder al imgID y no su url.
    idFoto = getImgID();
    sNombre = inputNombrePokemon.value;
    sCodigo = inputCodigoPokedex.value;
    sTipo1 = listaTipos[0];
    sTipo2 = listaTipos[1];
    
    let bError = false;
    bError = validar();

    if (bError) {
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el pokémon, verifique que completó correctamente la información que se le solicita',
            type: 'error',
            confirmButtonText: 'Entendido'
        });
    } else {
        infoPokemon.push(idFoto, sNombre, sCodigo, sTipo1, sTipo2);
        registrarPokemon(infoPokemon);
        swal({
            title: 'Registro correcto',
            text: 'El pokémon se registró correctamente',
            type: 'success',
            confirmButtonText: 'Entendido'
        });
        $('.swal2-confirm').click(function () {
            window.location.href = "../html/index.html";
        });
        limpiarFormulario();
    }
};


function validar() {
    let bError = false;

    idFoto = getImgID();
    sNombre = inputNombrePokemon.value;
    sCodigo = inputCodigoPokedex.value;

    // Validacion para el nombre
    if (regexSoloLetras.test(sNombre) == false || sNombre.value == "") {
        bError = true;
        inputNombrePokemon.classList.add('errorInput');
    } else {
        inputNombrePokemon.classList.remove('errorInput');
    };

    if (regexCodigo.test(sCodigo) == false || sCodigo.value == "") {
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
    idFoto = setImgID('ditto');
    setImgSrc(idFoto)
    clearTipos();
};