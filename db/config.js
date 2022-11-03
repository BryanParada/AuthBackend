const  mongoose = require("mongoose");

const dbConnection = async() => {
    try {

        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // useCreateIndex: true // no es necesario, mongoose ya trae por defecto
        });

        console.log('DB Online');
        

    } catch (error){
        console.log(error);
        throw new Error('Error connecting Database');
        
    }
}

module.exports = {
    dbConnection
}