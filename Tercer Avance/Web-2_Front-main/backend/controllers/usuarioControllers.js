import Usuario from "../Models/Usuario.js";
import generarID from "../helpers/generarID.js";
import generarToken from "../helpers/generarID.js";
import generarJWT from "../helpers/generarJWT.js";


const registrar = async (req,res) => {
// Evitar registros duplicados
const {email} = req.body;
const existeUsuario = await Usuario.findOne({email});

if(existeUsuario){
    const error = new Error("Error - Usuario ya Registrado");
    return res.status(400).json({msg: error.message});
}


 try{
    const usuarioR = new Usuario(req.body);
    usuarioR.token = generarToken();
    const usuarioBD = await usuarioR.save();

    console.log(usuarioR);

    res.status(201).json(usuarioBD);
 }
 catch(error){
     console.log(error);
 }

   
};

const autenticar = async (req,res) => {

    const {email,usuario,password} = req.body;
    //Comprobar si el usuario existe

    const usuarioP = await Usuario.findOne({email,usuario});
    if(!usuarioP){
        const error = new Error("El usuario NO existe");
        return res.status(404).json({msg: error.message});
    }

    //Comprobar si el usuario esta confirmado
    if(!usuarioP.confirmar){
        const error = new Error("Tu cuenta no a sido confirmada");
        return res.status(403).json({msg: error.message});
    }

    //Comprobar su password
    if(await usuarioP.comprobarPassword(password)){
        console.log("Es Correcto");
        res.json({
            _id: usuarioP.id,
            usuario: usuarioP.usuario,
            nombre: usuarioP.nombre,
           nombre2: usuarioP.nombre2,
         apPaterno: usuarioP.apPaterno,
         apMaterno: usuarioP.apMaterno,
         FechaNac: usuarioP.FechaNac,
         email: usuarioP.email,
         TipoCuenta: usuarioP.TipoCuenta,
         token: generarJWT(usuarioP._id)


        })
     }
     else{
        console.log("Es Incorrecto");
        const error = new Error("El password es incorrecto");
        return res.status(403).json({msg: error.message});
     }


};

const confirmar = async (req,res) => {

    const {token} = req.params; // leer de la URL
    const usuarioConfirmar = await Usuario.findOne({token}); // buscar usuario con ese token

    if(!usuarioConfirmar){
        const error = new Error("TOKEN NO VALIDO"); // sino existe
        return res.status(403).json({msg: error.message});
    }

    try{
    
    usuarioConfirmar.confirmar = true; // confirmar usuario a true
    usuarioConfirmar.token = ""; // eliminamos el token porque es de un solo uso

    await usuarioConfirmar.save(); // almacenamos en la base de datos
    res.json({msg: 'Usuario Confirmado Correctamente'}) // si existe

    }
    catch(error){
    console.log(error);
    }

    
};

const olvidePassword = async (req,res) =>{

    const {email} = req.body;
    const usuarioP = await Usuario.findOne({email});
    if(!usuarioP){
        const error = new Error("El usuario NO existe");
        return res.status(404).json({msg: error.message});
    }


    try {
        usuarioP.token = generarID();
        await usuarioP.save();
        res.json({msg: "Hemos enviado un email con las instrucciones"});
    } catch (error) {
        console.log(error);
    }
    
};

const comprobarToken = async(req,res) => {
    const { token } = req.params;

    const tokenvalido = await Usuario.findOne({token});

    if(tokenvalido){
       res.json({msg: "EL TOKEN ES VALIDO y usuario existe!!"})
    }
    else{
        const error = new Error("El Token es invalido");
        return res.status(404).json({msg: error.message});
    }
    
};

const nuevoPassword = async (req,res)=>{
const {token} = req.params;
const {password} = req.body;

const usuarioNuevo = await Usuario.findOne({token});

if(usuarioNuevo){
usuarioNuevo.password = password;
usuarioNuevo.token = "";
try {
  await usuarioNuevo.save();
res.json({msg: "Password modificado correctamente."});
} catch (error) {
    console.log(error);
}

}
else{
    const error = new Error("El Token es invalido");
    return res.status(404).json({msg: error.message});
}
};

const perfil = async (req,res) => {

    const {usuario} = req;
    res.json(usuario);
};

export { registrar,autenticar,confirmar,olvidePassword,comprobarToken,nuevoPassword,perfil  };