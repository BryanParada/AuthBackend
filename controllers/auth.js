const { response } = require("express");
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require("../helpers/jwt"); 

//Crear nuevo usuario
const createUser = async(req, res = response) => {
  //console.log(req.body);
  const { email, name, password } = req.body;
  //console.log(email, name, password);

  try {
    //Verificar mail
    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'This email already exists'
      })
    }

    //Crear usuario con el modelo
    const dbUser = new User(req.body);


    // Hash password
    const salt = bcrypt.genSaltSync(10);//10 vueltas!
    dbUser.password = bcrypt.hashSync( password, salt);


    // Generar JWT
    const token = await generateJWT(dbUser.id, name);

    // Crear usuario de DB
    await dbUser.save();

    // Generar Respuesta exitosa
    return res.status(201).json({
      ok: true,
      uid: dbUser.id,
      name, 
      email,
      token
    });

  } catch (error) {
    console.log(error);

    return res.json({
      ok: true,
      msg: "Please contact your Admin",
    });
  }
};

//Login usuario
const loginUser = async(req, res = response) => {
  //console.log(req.body);
  const { email, password } = req.body;
  // console.log(email, password);

  try {


    //verificar si email existe
    const dbUser = await User.findOne({ email: email }) // email

    if ( !dbUser ) {
      return res.status(400).json({
        ok: false,
        msg: 'Email does not exist'
      });
    }

    //Confirmar si password hace match
    const validPassword = bcrypt.compareSync( password, dbUser.password );

    if ( !validPassword ) {
      return res.status(400).json({
        ok: false,
        msg: 'Password not valid'
      });
    }

    //Generar el JWT
    const token = await generateJWT(dbUser.id, dbUser.name);

    // Respuesta del servicio
    return res.json({
      ok: true,
      uid: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      token

    })


  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Contact your admin'
    });

  } 
 
};

// Validar y revalidar token
const renewToken = async(req, res = response) => {

  const {uid} = req;

  //leer la base de datos par obtener email
  const dbUser = await User.findById(uid)


  // Generar JWT
  //Esto es para aumentar el tiempo que el usuario va a poder estar 
  //logueado en la app, ya que el nuevo token tiene todo el tiempo
  //especificado antes de que caduque, mientras que el anterior le queda menos.

  //A un token ya generado no podemos modificarle el tiempo de expiración, 
  //es por eso que se crea uno nuevo.

  
  const token = await generateJWT(uid, dbUser.name);

  return res.json({
    ok: true,
    msg: "Renew /" ,
    uid,
    name: dbUser.name, 
    email: dbUser.email,
    token
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
