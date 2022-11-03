const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();


//controladores de ruta

//Crear nuevo usuario 
router.post( '/new',
[
check('email', 'Email is required').isEmail(),
check('name', 'Name is required').not().isEmpty(),
check('password', 'Password must be at least 6 characters').isLength({ min: 6}),
validateFields //este middleware se ejecutara cuando la ruta sea invocada v
],
 createUser); //<- mandando como referencia 

//Login usuario 
//          ruta,   
router.post( '/', [
//middleware
check('email', 'Email is required').isEmail(),
check('password', 'Password must be at least 6 characters').isLength({ min: 6}),
validateFields

] , loginUser);//controlador ruta

// Validar y revalidar token
router.get( '/renew', renewToken);






module.exports = router;