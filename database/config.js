const mongoose = require('mongoose')

const dbConnection = async()=>{

    try{

        await mongoose.connect(process.env.MOGNODB_CNN)
        console.log("Base de datos online")

    }catch(err){
        throw new Error('Error a la hora de iniciar la base de datos')
    }

}


module.exports ={
    dbConnection
}