const { response, request } = require('express');
const Ambiente = require('../models/ambiente')


const ambientesGet = async (req = request, res = response) => {
    const ambientes = await Ambiente.find();
    res.json({
        ambientes
    })
}

const ambientesPost = async (req, res = response)  => {

    const {fecha,hora,temperatura,humedad} = req.body;
    const ambiente = new Ambiente({fecha,hora,temperatura,humedad});

    await ambiente.save();
    console.log(ambiente)

    res.json({
        msg: 'post API - ambientesPost',
        ambiente
    });
}

const ambientesPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - ambientesPut',
        id
    });
}

const ambientesPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - ambientesPatch'
    });
}

const ambientesDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - ambientesDelete'
    });
}

module.exports = {
    ambientesGet,
    ambientesPost,
    ambientesPut,
    ambientesPatch,
    ambientesDelete,
}