const { response, request } = require('express');
const Comando = require('../models/comando')

const comandosGet =async (req = request, res = response) => {
    const comandos = await Comando.find();
    // Eliminar cada comando después de obtenerlo
    await Comando.deleteMany({});
    res.json({
        comandos
    })
}

const comandosPost = async (req, res = response)  => {
    const {nombre} = req.body;
    const comando = new Comando({nombre});
    await comando.save();
    res.json({
        msg: 'post API - comandosPost',
        comando
    });
}

const comandosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - comandosPut',
        id
    });
}

const comandosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - comandosPatch'
    });
}

const comandosDelete =async (req, res = response) => {
    const comandos = await Comando.delete;
    res.json({
        comandos
    })
}

module.exports = {
    comandosGet,
    comandosPost,
    comandosPut,
    comandosPatch,
    comandosDelete,
}