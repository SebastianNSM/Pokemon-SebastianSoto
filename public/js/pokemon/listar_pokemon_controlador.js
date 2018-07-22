'use strict';
createOptions();
mostrarPokemones();



function createOptions() {
    let arregloTipos = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psycic', 'Rock', 'Steel', 'Water'];
    let listTipos = document.querySelector('#dtlTypeList');

    for (let i = 0; i < arregloTipos.length; i++) {
        let opcion = new Option(arregloTipos[i]);
        opcion.value = arregloTipos[i];
        listTipos.appendChild(opcion);
    }
};
function getImgUrl(id) {
    let url = "http://res.cloudinary.com/sebastiansm/image/upload/";
    let imgUrl = url + id;

    return imgUrl;
};

let inputFiltroNombre = document.querySelector('#txtFiltroNombre');

inputFiltroNombre.addEventListener('keyup', function () {
    imprimirListaPersonas(inputFiltroNombre.value)
});

function mostrarPokemones(pFiltro) {

    let tbody = document.querySelector('#tblPokemon tbody');
    if (!pFiltro) {
        pFiltro = '';
    }
    tbody.innerHTML = '';
    let listaPokemon = obtenerListaPokemon();
    

    for (let i = 0; i < listaPokemon.length; i++) {
        if (listaPokemon[i]['nombre_pokemon'].toLowerCase().includes(pFiltro.toLowerCase())) {
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
            cNombre.innerHTML = listaPokemon[i]['nombre_pokemon'];
            cCodigo.innerHTML = listaPokemon[i]['codigo_pokemon'];

            createToolTip(listaPokemon[i]['primer_tipo_pokemon'], cTipo1);
            createToolTip(listaPokemon[i]['segundo_tipo_pokemon'], cTipo2);

        }

    }

};

function createToolTip(primerTipo, primerCelda){
    let pathTypes = "../img/Types/";
    let pTipo = primerTipo;

    if (pTipo == null) {
        primerCelda.innerHTML = "-";
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
}