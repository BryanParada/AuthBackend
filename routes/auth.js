const { Router } = require('express');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();


//controladores de ruta

//Crear nuevo usuario 
router.post( '/new', createUser); //<- mandando como referencia 

//Login usuario 
router.post( '/', loginUser);

// Validar y revalidar token
router.get( '/renew', renewToken);






module.exports = router;