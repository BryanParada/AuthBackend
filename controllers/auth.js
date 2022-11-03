const { response } = require('express');
const { validationResult } = require('express-validator');

//Crear nuevo usuario 
const createUser = (req, res = response) =>{


    //console.log(req.body);
    const {email, name, password} = req.body;
    console.log(email, name, password);
    
    
    return res.json({
        ok: true,
        msg: 'Create User /new'
    });
}

//Login usuario 
const loginUser = (req, res = response) =>{

    const errors = validationResult( req );
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    //console.log(req.body);
    const {email, password} = req.body;
    console.log(email, password);

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