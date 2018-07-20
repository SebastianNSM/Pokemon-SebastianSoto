'use strict';
let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombrePokemon = document.querySelector('#txtNombrePokemon');
let inputCodigoPokedex = document.querySelector('#txtNumeroPokedex');


let regexSoloLetras = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
let regexCodigo = /^[a-zA-Z0-9]+$/;

let sNombre = "";
let sCodigo = "";

function obtenerDatos() {
    let infoPokemon = [];

    sNombre = inputNombrePokemon.value;
    sCodigo = inputCodigoPokedex.value;
    idFoto = getImgID();
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
        swal({
            title: 'Registro correcto',
            text: 'El pokémon se registró correctamente',
            type: 'success',
            confirmButtonText: 'Entendido'
        });
        infoPokemon.push(idFoto, sNombre, sCodigo);

        limpiarFormulario();
    }
};


function validar() {
    let bError = false;

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

    return bError;
};

function limpiarFormulario() {
    inputNombrePokemon.value = "";
    inputCodigoPokedex.value = "";
};