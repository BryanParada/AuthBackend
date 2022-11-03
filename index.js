const express = require('express');
const cors = require('cors');
require('dotenv').config();

//variables de entorno
//console.log(process.env);


//crear el servidor/aplicacion de express
const app = express();
//const port = 4000;
 
//---middlewares

//Directorio publico
app.use( express.static('public'))

//CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json())

// Rutas
app.use( '/api/auth', require('./routes/auth'));


// // GET
// app.get('/', (req, res) =>{
//     // res.status(500).json({
//     res.json({
//         ok: true,
//         msg: 'everything ok',
//         uid: 1234
//     })
    
// })

// LISTEN
app.listen( process.env.PORT, () =>{
   console.log(`Server running in port: ${process.env.PORT}` );
   
} )

console.log('hola desde node!');

