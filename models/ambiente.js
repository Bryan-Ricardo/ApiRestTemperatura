const {Schema, model} = require('mongoose')

const AmbienteSchema = Schema({
    fecha:{
        type:String, 
        required:[true,'La Fecha es obligatoria']
    },
    hora:{
        type:String, 
        required:[true,'La Hora es obligatoria']
    },
    temperatura:{
        type:String, 
        required:[true,'La Temperatura es obligatoria']
    },
    humedad:{
        type:String, 
        required:[true,'La Humedad es obligatoria']
    }
}) 

module.exports = model('Ambiente',AmbienteSchema)