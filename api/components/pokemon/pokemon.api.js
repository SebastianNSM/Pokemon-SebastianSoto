'use strict';

const pokemonModel = require('./pokemon.model');

module.exports.registrar_pokemon = function(req,res){
    let nuevoPokemon = new pokemonModel({
        foto_pokemon: req.body.foto_pokemon,
        nombre_pokemon: req.body.nombre_pokemon,
        numero_pokemon: req.body.numero_pokemon,
        primer_tipo_pokemon: req.body.primer_tipo_pokemon,
        segundo_tipo_pokemon: req.body.segundo_tipo_pokemon
    });
    nuevoPokemon.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: 'Este pokémon no pudo ser registrado: ' + error
            });
        } else {
            res.json({
                success: true,
                msg: 'El pokémon ha sido registrado correctamente ' + error
            });
        }
    });
};

module.exports.listar_pokemon = function (req, res) {
    pokemonModel.find().sort({ nombre_pokemon: 'asc' }).then(
        function (pokemon) {
            res.send(pokemon);
        }
    );
};