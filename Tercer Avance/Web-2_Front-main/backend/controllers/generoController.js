import Genero from "../Models/Genero.js";

const obtenerGeneros = async (req,res)=>{
const generos = await Genero.find().where('administrador').equals(req.usuario);

res.json(generos);
};

const nuevoGenero = async (req,res)=>{

const genero = new Genero(req.body);
genero.administrador = req.usuario._id;

try {
    const generoAlmacenado = await genero.save();
    res.json(generoAlmacenado);
} catch (error) {
    console.log(error);
    
}

};

const obtenerGenero = async (req,res)=>{
    const { id } = req.params;
    const genero = await Genero.findById(id);

    if(!genero){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(genero.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    res.json(genero);

};

const editarGenero = async (req,res)=>{
    const { id } = req.params;
    const genero = await Genero.findById(id);

    if(!genero){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(genero.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }


    genero.nombre = req.body.nombre || genero.nombre;
    genero.descripcion = req.body.descripcion || genero.descripcion;

    try {
        const generoAlmacenado = await genero.save();
        res.json(generoAlmacenado);
    } catch (error) {
        console.log(error);
    }

};

const eliminarGenero = async (req,res)=>{
    const { id } = req.params;
    const genero = await Genero.findById(id);

    if(!genero){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(genero.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    try {
        await genero.deleteOne();
        res.json({msg: "Genero Eliminado"})
    } catch (error) {
        console.log(error);
    }


};

export{obtenerGeneros,nuevoGenero,obtenerGenero,editarGenero,eliminarGenero};