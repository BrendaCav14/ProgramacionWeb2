import Venta from "../Models/Venta.js";

const obtenerVentas = async (req,res)=>{
const ventas = await Venta.find().where('cliente').equals(req.usuario);

res.json(ventas);
};

const nuevoVenta = async (req,res)=>{

const venta = new Venta(req.body);
venta.cliente = req.usuario._id;


try {
    const ventaAlmacenado = await venta.save();
    res.json(ventaAlmacenado);
} catch (error) {
    const errorv = new Error("Nombre ya Registrado");
    return res.status(401).json({msg: errorv.message});
    
}

};

const obtenerVenta = async (req,res)=>{
    const { id } = req.params;
    const venta = await Venta.findById(id);

    if(!venta){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(venta.cliente.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    res.json(venta);

};


const eliminarVenta = async (req,res)=>{
    const { id } = req.params;
    const venta = await Venta.findById(id);

    if(!venta){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(venta.cliente.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    try {
        await venta.deleteOne();
        res.json({msg: "Venta Eliminado"})
    } catch (error) {
        console.log(error);
    }


};

export{obtenerVentas,nuevoVenta,obtenerVenta,eliminarVenta};