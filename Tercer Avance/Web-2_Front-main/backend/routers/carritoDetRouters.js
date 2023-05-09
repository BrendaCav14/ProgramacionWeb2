import express from "express";
import{obtenerCarritosDet,nuevoCarritoDet,obtenerCarritoDet,eliminarCarritoDet} from "../controllers/carritoDetController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas Generos

router.route("/")
.get(checkAuth, obtenerCarritosDet)
.post(checkAuth, nuevoCarritoDet);

router.route("/:id")
.get(checkAuth,obtenerCarritoDet)
.delete(checkAuth,eliminarCarritoDet);

export default router;