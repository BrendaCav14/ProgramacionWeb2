const model = require('../models/user');

const findUsuario = async (req, res) => {
    console.log("find USUARIO")
    const usuario = await model.find()
  
        res.status(200).json(usuario)
    
}

const setUsuario = async (req, res) => {
    console.log("SET USUARIO", req.body)
    const { nombre, edad, correo } = req.body;

    const nuevoUsuario = new Usuario({

        nombre: nombre,
        edad: edad,
        correo: correo

    });
    nuevoUsuario.save((err, document) => {

        if (err) {
            console.log("ERROR", err)
            res.status(200).json({ Mensaje: "Error an insert de usuariol", document: document })
        }

        res.status(200).json({ Mensaje: "Usuario Insertado Correctamente!", document: document })
    });
}
module.exports = 
{
    findUsuario,
    setUsuario
}

