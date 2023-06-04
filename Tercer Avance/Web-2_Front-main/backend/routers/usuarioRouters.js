import express from "express";
const router = express.Router();


import {registrar,autenticar,confirmar,olvidePassword,comprobarToken,nuevoPassword,perfil,
    obtenerUsuario,editarUsuario,eliminarUsuario} from '../controllers/usuarioControllers.js';
import checkAuth from "../middleware/checkAuth.js";




//  Autenticacion,Registro y Confirmacion de Usuarios
router.post('/', registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/restaurar-password", olvidePassword);
router.get("/restaurar-password/:token", comprobarToken);
router.post("/restaurar-password/:token", nuevoPassword);

router.get("/perfil", checkAuth, perfil);

router.get("/TipoCuenta",checkAuth,obtenerUsuario);

router.route("/:id")
.put(checkAuth,editarUsuario)
.delete(checkAuth,eliminarUsuario);




export default router;