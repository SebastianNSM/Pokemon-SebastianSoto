'use strict';

let mongoose = require('mongoose');

let entrenadorSchema = new mongoose.Schema({
    nombre_entrenador: { type: String, require: true, unique: true },
    numero_entrenador: { type: Number, require: true, unique: true },
    edad_entrenador: { type: Number, require: true },
    sexo_entrenador: { type: String, require: true },
    pokemon_entrenador: [
        {
            nombre_pokemon: {type: String},
            numero_pokemon: {type: Number}
        }
    ]
});

module.exports = mongoose.model('Entrenador', entrenadorSchema);