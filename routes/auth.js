const { Router } = require('express');

const router = Router();


//controladores de ruta

//Crear nuevo usuario 
router.post( '/new', (req, res) =>{
        return res.json({
            ok: true,
            msg: 'Create User /new'
        });
});


//Login usuario 
router.post( '/', (req, res) =>{
    return res.json({
        ok: true,
        msg: 'Login user /'
    });
});

// Validar y revalidar token
router.get( '/renew', (req, res) =>{
    return res.json({
        ok: true,
        msg: 'Login user /'
    });
});






module.exports = router;