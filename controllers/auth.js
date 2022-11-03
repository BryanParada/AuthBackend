const { response } = require("express");
const User = require('../models/User');

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

    // Generar JWT

    // Crear usuario de DB
    await dbUser.save();

    // Generar Respuesta exitosa
    return res.status(201).json({
      ok: true,
      uid: dbUser.id,
      name, 
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
const loginUser = (req, res = response) => {
  //console.log(req.body);
  const { email, password } = req.body;
  // console.log(email, password);

  return res.json({
    ok: true,
    msg: "Login user /",
  });
};

// Validar y revalidar token
const renewToken = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "Renew /",
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
