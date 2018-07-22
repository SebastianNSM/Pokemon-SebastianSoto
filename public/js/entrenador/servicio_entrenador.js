'use strict';

function registrarEntrenador(paInfoEntrenador) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_entrenador',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            foto_entrenador: paInfoEntrenador[0],
            nombre_entrenador: paInfoEntrenador[1],
            numero_entrenador: paInfoEntrenador[2],
            edad_entrenador: paInfoEntrenador[3],
            sexo_entrenador: paInfoEntrenador[4]
        }
    });

    peticion.done(function (response) {
        respuesta = response;
        if (respuesta.success) {
            swal({
                title: 'Registro correcto',
                text: 'El entrenador se registró correctamente',
                type: 'success',
                confirmButtonText: 'Entendido'
            });
            $('.swal2-confirm').click(function () {
                window.location.href = "../html/entrenador_listar.html";
            });
            limpiarFormulario();
        } else {
            swal({
                title: 'Registro incorrecto',
                text: 'No se pudo registrar al entrenador: ' + respuesta.msg,
                type: 'error',
                confirmButtonText: 'Entendido'
            });
        }
    });

    peticion.fail(function (response) {

    });

    return respuesta;
}
function obtenerListaEntrenadores() {
    // let listaPersonas = [];

    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_entrenador',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;

    // return listaPersonas;
}

function agregarPokemon(id, sNombrePokemon, sNumeroPokemon) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/agregar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            _id: id,
            nombre_pokemon: sNombrePokemon,
            numero_pokemon: sNumeroPokemon
        }
    });

    peticion.done(function (response) {
        respuesta = response;
        if (respuesta.success) {
            swal({
                title: 'Captura exitosa',
                text: 'El pokémon se capturó correctamente',
                type: 'success',
                confirmButtonText: '¡Genial!'
            });
            $('.swal2-confirm').click(function () {
                location.reload();
            });
        } else {
            swal({
                title: 'Captura fallida.',
                text: 'Algo salió muy mal: ' + respuesta.msg,
                type: 'error',
                confirmButtonText: 'Entendido'
            });
        }
    });

    peticion.fail(function (response) {

    });

    return respuesta;
}