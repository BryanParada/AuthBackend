const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();


//controladores de ruta

//Crear nuevo usuario 
router.post( '/new', createUser); //<- mandando como referencia 

//Login usuario 
//          ruta,   
router.post( '/', [
//middleware
check('email', 'Email is required').isEmail(),
check('password', 'Password must be at least 6 characters').isLength({ min: 6}),

] , loginUser);//controlador ruta

// Validar y revalidar token
router.get( '/renew', renewToken);






module.exports = router;