'use strict';

function registrarPokemon (paInfoPokemon)
{
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            foto_pokemon: paInfoPokemon[0],
            nombre_pokemon: paInfoPokemon[1],
            codigo_pokemon: paInfoPokemon[2],
            primer_tipo_pokemon: paInfoPokemon[3],
            segundo_tipo_pokemon: paInfoPokemon[4],
        }
    });

    peticion.done(function (response)
    {
        respuesta = response;
        if(respuesta.success){
            swal({
                title: 'Registro correcto',
                text: 'El pokémon se registró correctamente',
                type: 'success',
                confirmButtonText: 'Entendido'
            });
            $('.swal2-confirm').click(function () {
                window.location.href = "../html/pokemon_listar.html";
            });
            limpiarFormulario();
        }else{
            swal({
                title: 'Registro incorrecto',
                text: 'No se pudo registrar el pokémon: '+respuesta.msg,
                type: 'error',
                confirmButtonText: 'Entendido'
            });
        }
        
    });

    peticion.fail(function (response)
    {
        
    });

    return respuesta;
}

function obtenerListaPokemon(){

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_pokemon',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
}
