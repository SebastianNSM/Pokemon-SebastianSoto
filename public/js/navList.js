'use strict';

let btnPokemon = $("#lnkPokemon");
let btnEntrenador = $("#lnkEntrenador");
let optBox = $(".menu");

btnPokemon.click(function(){showMenu("#menuPokemon");});
btnEntrenador.click(function(){showMenu("#menuEntrenador");});

optBox.mouseleave(function(){
    hideMenu(optBox);
});
// Estas son las funciones generales
function showMenu(pmenu) {
    if ($(pmenu).css("display") === 'none') {
        $(pmenu).show();
    }
};
function hideMenu(pmenu) {
    $(pmenu).hide();
};
// Estas son las funciones generales