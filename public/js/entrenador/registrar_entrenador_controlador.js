'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombreEntrenador = document.querySelector('#txtNombreEntrenador');
let inputNumeroEntrenador = document.querySelector('#numNumeroEntrenador');
let inputEdadEntrenador = document.querySelector('#numEdadEntrenador');
let inputSexoEntrenador = document.querySelector('#txtSexo');

let regexEntrenador = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;

let idFotoEntrenador = "";
let sNombreEntrenador = "";
let nNumeroEntrenador = "";
let nEdadEntrenador = "";
let sSexoEntrenador = "";

function obtenerDatos() {
    let infoEntrenador = [];
    idFotoEntrenador = getImgID();
    sNombreEntrenador = inputNombreEntrenador.value;
    nNumeroEntrenador = Number(inputNumeroEntrenador.value);
    nEdadEntrenador = Number(inputEdadEntrenador.value);
    sSexoEntrenador = inputSexoEntrenador.value;

    let bError = false;
    bError = validar();

    if (bError) {
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el entrenador, verifique que completó correctamente la información que se le solicita',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    } else {

        infoEntrenador.push(idFotoEntrenador, sNombreEntrenador, nNumeroEntrenador, nEdadEntrenador, sSexoEntrenador);
        registrarEntrenador(infoEntrenador);
    }
};

function validar() {
    let bError = false;

    idFotoEntrenador = getImgID();
    sNombreEntrenador = inputNombreEntrenador.value;
    nNumeroEntrenador = Number(inputNumeroEntrenador.value);
    nEdadEntrenador = Number(inputEdadEntrenador.value);
    sSexoEntrenador = inputSexoEntrenador.value;

    // Validacion para el nombre
    if (regexEntrenador.test(sNombreEntrenador) == false || sNombreEntrenador.value == "") {
        bError = true;
        inputNombreEntrenador.classList.add('errorInput');
    } else {
        inputNombreEntrenador.classList.remove('errorInput');
    };

    if(inputNumeroEntrenador.value == "" || nNumeroEntrenador < 1 ){
        bError = true;
        inputNumeroEntrenador.classList.add('errorInput');
    } else {
        inputNumeroEntrenador.classList.remove('errorInput');
    };

    // Validacion para la edad
    if (nEdadEntrenador < 16 || nEdadEntrenador > 79 || inputEdadEntrenador.value == "") {
        bError = true;
        inputEdadEntrenador.classList.add('errorInput');
    } else {
        inputEdadEntrenador.classList.remove('errorInput');
    };

    // Validacion para el select
    if (inputSexoEntrenador.value == "") {
        bError = true;
        inputSexoEntrenador.classList.add('errorInput');
    } else {
        inputSexoEntrenador.classList.remove('errorInput');
    };

    if (idFotoEntrenador == "") {
        bError = true;
        swal({
            title: 'Foto faltante',
            text: 'Cada entrenador necesita una foto para ser identificado, verifique haberle adjuntado una.',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    }

    return bError;
};

function limpiarFormulario() {
    inputNombreEntrenador.value = "";
    inputNumeroEntrenador.value = "";
    inputEdadEntrenador.value = "";
    inputSexoEntrenador.value = "";
    resetImg();
};