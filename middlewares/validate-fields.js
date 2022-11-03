const { response } = require("express");
const { validationResult } = require("express-validator");

const validateFields = (req, res = response, next) =>{

    const errors = validationResult( req );
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    //next: funcion que se ejecuta cuando todo se ejecuta correctamente
    //procede a siguiente middleware
    next();
}

module.exports = {
    validateFields
}