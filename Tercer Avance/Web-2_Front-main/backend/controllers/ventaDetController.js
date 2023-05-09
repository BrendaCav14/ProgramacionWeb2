import VentaDet from "../Models/VentaDet.js";

const obtenerVentasDet = async (req,res)=>{
const ventasDet = await VentaDet.find().where('cliente').equals(req.usuario);

res.json(ventasDet);
};

const nuevoVentaDet = async (req,res)=>{

const ventaDet = new VentaDet(req.body);
ventaDet.cliente = req.usuario._id;


try {
    const ventaDetAlmacenado = await ventaDet.save();
    res.json(ventaDetAlmacenado);
} catch (error) {
    const errorv = new Error("Nombre ya Registrado");
    return res.status(401).json({msg: errorv.message});
    
}

};

const obtenerVentaDet = async (req,res)=>{
    const { id } = req.params;
    const ventaDet = await VentaDet.findById(id);

    if(!ventaDet){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(ventaDet.cliente.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    res.json(ventaDet);

};



const eliminarVentaDet = async (req,res)=>{
    const { id } = req.params;
    const ventaDet = await VentaDet.findById(id);

    if(!ventaDet){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(ventaDet.cliente.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    try {
        await ventaDet.deleteOne();
        res.json({msg: "Venta Detalle Eliminado"})
    } catch (error) {
        console.log(error);
    }


};

export{obtenerVentasDet,nuevoVentaDet,obtenerVentaDet,eliminarVentaDet};