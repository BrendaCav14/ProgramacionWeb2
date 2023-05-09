import Carrito from "../Models/Carrito.js";

const obtenerCarritos = async (req,res)=>{
const carritos = await Carrito.find().where('cliente').equals(req.usuario);

res.json(carritos);
};

const nuevoCarrito = async (req,res)=>{

const carrito = new Carrito(req.body);
carrito.cliente = req.usuario._id;


try {
    const carritoAlmacenado = await carrito.save();
    res.json(carritoAlmacenado);
} catch (error) {
    const errorv = new Error("Nombre ya Registrado");
    return res.status(401).json({msg: errorv.message});
    
}

};

const obtenerCarrito = async (req,res)=>{
    const { id } = req.params;
    const carrito = await Carrito.findById(id);

    if(!carrito){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(carrito.cliente.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    res.json(carrito);

};

const editarCarrito = async (req,res)=>{
    const { id } = req.params;
    const carrito = await Carrito.findById(id);

    if(!carrito){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(carrito.cliente.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    carrito.Total = req.body.Total || carrito.Total;

    try {
        const carritoAlmacenado = await carrito.save();
        res.json(carritoAlmacenado);
    } catch (error) {
        console.log(error);
    }

};

const eliminarCarrito = async (req,res)=>{
    const { id } = req.params;
    const carrito = await Carrito.findById(id);

    if(!carrito){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(carrito.cliente.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    try {
        await carrito.deleteOne();
        res.json({msg: "Carrito Eliminado"})
    } catch (error) {
        console.log(error);
    }


};

export{obtenerCarritos,nuevoCarrito,obtenerCarrito,editarCarrito,eliminarCarrito};