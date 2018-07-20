'use strict';

const entrenadorModel = require('./entrenador.model');

module.exports.registrar_entrenador = function(req,res){
    let nuevoEntrenador = new entrenadorModel({
        foto_entrenador: req.body.foto_entrenador,
        nombre_entrenador: req.body.nombre_entrenador,
        numero_entrenador: req.body.numero_entrenador,
        edad_entrenador: req.body.edad_entrenador,
        sexo_entrenador: req.body.sexo_entrenador
    });
    nuevoEntrenador.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: 'Este entrenador no pudo ser registrado: ' + error
            });
        } else {
            res.json({
                success: true,
                msg: 'El entrenador ha sido registrado correctamente ' + error
            });
        }
    });
};

module.exports.listar_entrenador = function (req, res) {
    entrenadorModel.find().sort({ nombre_entrenador: 'asc' }).then(
        function (entrenador) {
            res.send(entrenador);
        }
    );
};

module.exports.agregar_pokemon = function (req, res) {

    entrenadorModel.update(
        { _id: req.body._id },
        {
            $push:
            {
                'pokemon_entrenador':
                {
                    nombre_pokemon: req.body.nombre_pokemon,
                    numero_pokemon: req.body.numero_pokemon
                }
            }
        },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo registrar el pokémon , ocurrió el siguiente error' + error });
            } else {
                res.json({ success: true, msg: 'El pokémon se registró con éxito' });
            }
        }
    )
};
