'use strict';

let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
    foto_entrenador: { type: String },
    nombre_pokemon: { type: String, require: true, unique: true },
    numero_pokemon: { type: Number, require: true, unique: true },
    primer_tipo_pokemon: { type: String, require: true },
    segundo_tipo_pokemon: { type: String, require: false },
});

module.exports = mongoose.model('Pokemon', pokemonSchema);