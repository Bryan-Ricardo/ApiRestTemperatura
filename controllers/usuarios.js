const { response, request } = require('express');
const Usuario = require('../models/usuario')


const usuariosGet = (req = request, res = response) => {

    res.json({
        msg: 'get API - controlador',

    });
}

const usuariosPost = async (req, res = response)  => {

    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();
    console.log(usuario)

    res.json({
        msg: 'post API - usuariosPost',
        usuario
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}