import Director from "../Models/Director.js";

const obtenerDirectores = async (req,res)=>{
const directores = await Director.find().where('administrador').equals(req.usuario);

res.json(directores);
};

const nuevoDirector = async (req,res)=>{

const director = new Director(req.body);
director.administrador = req.usuario._id;

try {
    const directorAlmacenado = await director.save();
    res.json(directorAlmacenado);
} catch (error) {
    const errorv = new Error("Nombre ya Registrado");
    return res.status(401).json({msg: errorv.message});
    
}

};

const obtenerDirector = async (req,res)=>{
    const { id } = req.params;
    const director = await Director.findById(id);

    if(!director){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(director.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    res.json(director);

};

const editarDirector = async (req,res)=>{
    const { id } = req.params;
    const director = await Director.findById(id);

    if(!director){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(director.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    director.nombre = req.body.nombre || director.nombre;
    director.apellido = req.body.apellido || director.apellido;

    try {
        const directorAlmacenado = await director.save();
        res.json(directorAlmacenado);
    } catch (error) {
        console.log(error);
    }

};

const eliminarDirector = async (req,res)=>{
    const { id } = req.params;
    const director = await Director.findById(id);

    if(!director){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(director.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    
    try {
        await director.deleteOne();
        res.json({msg: "Director Eliminado"})
    } catch (error) {
        console.log(error);
    }


};

export{obtenerDirectores,nuevoDirector,obtenerDirector,editarDirector,eliminarDirector};