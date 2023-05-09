import Plataforma from "../Models/Plataforma.js";

const obtenerPlataformas = async (req,res)=>{
const plataformas = await Plataforma.find();

res.json(plataformas);
};

const nuevaPlataforma = async (req,res)=>{

const plataforma = new Plataforma(req.body);
plataforma.administrador = req.usuario._id;

try {
    const plataformaAlmacenado = await plataforma.save();
    res.json(plataformaAlmacenado);
} catch (error) {
  
    const errorv = new Error("Nombre ya Registrado");
    return res.status(401).json({msg: errorv.message});

    
}

};

const obtenerPlataforma = async (req,res)=>{
    const { id } = req.params;
    const plataforma = await Plataforma.findById(id);

    if(!plataforma){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(plataforma.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    res.json(plataforma);

};

const eliminarPlataforma = async (req,res)=>{
    const { id } = req.params;
    const plataforma = await Plataforma.findById(id);

    if(!plataforma){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(plataforma.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    try {
        await plataforma.deleteOne();
        res.json({msg: "Plataforma Eliminada"})
    } catch (error) {
        console.log(error);
    }


};

export{obtenerPlataformas,nuevaPlataforma,obtenerPlataforma,eliminarPlataforma};