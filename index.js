const express = require('express');

//crear el servidor/aplicacion de express
const app = express();
const port = 4000;

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
app.listen( port, () =>{
   console.log('Server running in port: '+ port );
   
} )

console.log('hola desde node!');

