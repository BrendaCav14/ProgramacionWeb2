import CarritoDet from "../Models/CarritoDet.js";

const obtenerCarritosDet = async (req,res)=>{
const carritosDet = await CarritoDet.find().where('cliente').equals(req.usuario);

res.json(carritosDet);
};

const nuevoCarritoDet = async (req,res)=>{

const carritosDet = new CarritoDet(req.body);
carritosDet.cliente = req.usuario._id;


try {
    const carritoDetAlmacenado = await carritosDet.save();
    res.json(carritoDetAlmacenado);
} catch (error) {
    const errorv = new Error("Nombre ya Registrado");
    return res.status(401).json({msg: errorv.message});
    
}

};

const obtenerCarritoDet = async (req,res)=>{
    const { id } = req.params;
    const carritoDet = await CarritoDet.findById(id);

    if(!carritoDet){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(carritoDet.cliente.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    res.json(carritoDet);

};


const eliminarCarritoDet = async (req,res)=>{
    const { id } = req.params;
    const carritoDet = await CarritoDet.findById(id);

    if(!carritoDet){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(carritoDet.cliente.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    try {
        await carritoDet.deleteOne();
        res.json({msg: "Carrito Detalle Eliminado"})
    } catch (error) {
        console.log(error);
    }


};

export{obtenerCarritosDet,nuevoCarritoDet,obtenerCarritoDet,eliminarCarritoDet};