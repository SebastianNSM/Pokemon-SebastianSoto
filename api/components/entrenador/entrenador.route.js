'use strict';

const express = require('express');
const router = express.Router();
const entrenadorApi = require('./entrenador.api');

router.route('/registrar_entrenador')
    .post(function (req, res) {
        entrenadorApi.registrar_entrenador(req, res);
    });

router.route('/listar_entrenador')
    .get(function (req, res) {
        entrenadorApi.listar_entrenador(req, res);
    });

router.route('/agregar_pokemon')
    .post(function (req, res) {
        pokemonApi.agregar_pokemon(req, res);//pokemonApi aparecia como users
    });

module.exports = router;