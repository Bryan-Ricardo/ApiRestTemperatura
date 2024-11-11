const {Schema, model} = require('mongoose')

const comandoSchema = Schema({
    nombre:{
        type:String, 
        required:[true,'El nombre de la comando es obligatoria']
    }
}) 

module.exports = model('Comando',comandoSchema)