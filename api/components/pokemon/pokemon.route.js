'use strict';

const express = require('express');
const router = express.Router();
const pokemonApi = require('./pokemon.api');

router.route('/registrar_pokemon')
    .post(function (req, res) {
        pokemonApi.registrar_pokemon(req, res);
    });

router.route('/listar_pokemon')
    .get(function (req, res) {
        pokemonApi.listar_pokemon(req, res);
    });

module.exports = router;