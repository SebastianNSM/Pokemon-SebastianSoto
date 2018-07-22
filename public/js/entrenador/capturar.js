'use strict';
let listaEntrenador = obtenerListaEntrenadores();
let listaPokemon = obtenerListaPokemon();

let id_entrenador = localStorage["id_entrenador"];
let entrenadorActual = encontrarEntrenador(id_entrenador);

let inputPokemon = document.querySelector('#txtPokemon');
let sPokemon = "";

let botonCapturar = document.querySelector('#btnCapturar');
botonCapturar.addEventListener('click', obtenerDatos);

imprimirInfo();

// Inmediatamente agrega el nombre y los datos del entrenador
function imprimirInfo() {
    createOptions();
    // Estas variables son para cambiar el numero una vez se agregue un pokemon
    let perfil = document.querySelector('#perfil>div');


    let foto_entrenador = entrenadorActual['foto_entrenador'];
    let fotoEntrenadorDiv = document.querySelector('div#entrenadorFoto');
    fotoEntrenadorDiv.style.backgroundImage = "url('" + getImgUrl(foto_entrenador) + "')";

    // Genera el nombre del entrenador
    let perfilNombre = document.createElement('h2');
    perfilNombre.innerHTML = entrenadorActual['nombre_entrenador'];
    perfil.appendChild(perfilNombre);

    // Genera el text en el numero de pokemones del entrenador
    let spanNumeroTexto = document.createElement('span');
    spanNumeroTexto.innerHTML = "Número de pokémones:\t"
    // Genera el numero exacto de pokemones del entrenador
    let spanNumeroPokemones = document.createElement('span');
    spanNumeroPokemones.id = "cantPokemones";
    spanNumeroPokemones.innerHTML = Number(entrenadorActual['pokemon_entrenador'].length);;

    perfil.appendChild(spanNumeroTexto);
    perfil.appendChild(spanNumeroPokemones);
};

function obtenerDatos() {
    sPokemon = inputPokemon.value;
    let infoPokemon = encontrarPokemon(sPokemon);

    let nombre_pokemon = infoPokemon['nombre_pokemon'];
    let codigo_pokemon = infoPokemon['codigo_pokemon'];
    agregarPokemon(id_entrenador, nombre_pokemon, codigo_pokemon);

    let pkmImage = document.querySelector('#imgPokemonElegido');
    pkmImage.src = getImgUrl(listaPokemon[i]['foto_pokemon']);
}

// Crea las opciones de los pokemones que ya estan registrados
function createOptions() {
    let pokemonRegistrado = document.querySelector('#dtlPokemonList');

    for (let i = 0; i < listaPokemon.length; i++) {
        let opcion = new Option(listaPokemon[i]['nombre_pokemon']);
        opcion.value = listaPokemon[i]['nombre_pokemon'];

        pokemonRegistrado.appendChild(opcion);
    }
};

// Captura el id del localStorage y encuentra al entrenador
function encontrarEntrenador(id_entrenador) {
    let infoEntrenadorActual = [];
    for (let i = 0; listaEntrenador.length; i++) {
        if (id_entrenador == listaEntrenador[i]['_id']) {
            infoEntrenadorActual['foto_entrenador'] = listaEntrenador[i]['foto_entrenador'];
            infoEntrenadorActual['nombre_entrenador'] = listaEntrenador[i]['nombre_entrenador'];
            infoEntrenadorActual['numero_entrenador'] = listaEntrenador[i]['numero_entrenador'];
            infoEntrenadorActual['pokemon_entrenador'] = listaEntrenador[i]['pokemon_entrenador'];
            break;
        };
    };
    return infoEntrenadorActual;
};

// Captura el id del localStorage y encuentra al entrenador
function encontrarPokemon(nombre_pokemon) {
    let infoPokemonCapturado = [];
    for (let i = 0; listaPokemon.length; i++) {
        if (nombre_pokemon == listaPokemon[i]['nombre_pokemon']) {
            infoPokemonCapturado['foto_pokemon'] = listaPokemon[i]['foto_pokemon'];
            infoPokemonCapturado['nombre_pokemon'] = listaPokemon[i]['nombre_pokemon'];
            infoPokemonCapturado['codigo_pokemon'] = listaPokemon[i]['codigo_pokemon'];
            break;
        };
    };
    return infoPokemonCapturado;
}

// Gets the current pokemon in the datalist and gets its image

function getImgUrl(id) {
    let url = "http://res.cloudinary.com/sebastiansm/image/upload/";
    let imgUrl = url + id;

    return imgUrl;
}