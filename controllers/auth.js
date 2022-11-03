const { response } = require('express');

//Crear nuevo usuario 
const createUser = (req, res = response) =>{
    return res.json({
        ok: true,
        msg: 'Create User /new'
    });
}

//Login usuario 
const loginUser = (req, res = response) =>{
    return res.json({
        ok: true,
        msg: 'Login user /'
    });
}

// Validar y revalidar token
const renewToken = (req, res = response) =>{
    return res.json({
        ok: true,
        msg: 'Renew /'
    });
}


module.exports = {
    createUser,
    loginUser,
    renewToken
}