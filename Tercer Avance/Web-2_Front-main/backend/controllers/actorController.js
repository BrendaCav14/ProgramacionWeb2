import Actor from "../Models/Actor.js";

const obtenerActores = async (req,res)=>{
const actores = await Actor.find().where('administrador').equals(req.usuario);

res.json(actores);
};

const nuevoActor = async (req,res)=>{

const actor = new Actor(req.body);
actor.administrador = req.usuario._id;


try {
    const actorAlmacenado = await actor.save();
    res.json(actorAlmacenado);
} catch (error) {
  
    const errorv = new Error("Nombre ya Registrado");
    return res.status(401).json({msg: errorv.message});

    
}

};

const obtenerActor = async (req,res)=>{
    const { id } = req.params;
    const actor = await Actor.findById(id);

    if(!actor){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(actor.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    res.json(actor);

};

const editarActor = async (req,res)=>{
    const { id } = req.params;
    const actor = await Actor.findById(id);

    if(!actor){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(actor.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }


    actor.nombre = req.body.nombre || actor.nombre;
    actor.apellido = req.body.apellido || actor.apellido;

    try {
        const actorAlmacenado = await actor.save();
        res.json(actorAlmacenado);
    } catch (error) {
        console.log(error);
    }

};

const eliminarActor = async (req,res)=>{
    const { id } = req.params;
    const actor = await Actor.findById(id);

    if(!actor){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(actor.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    try {
        await actor.deleteOne();
        res.json({msg: "Actor Eliminado"})
    } catch (error) {
        console.log(error);
    }


};

export{obtenerActores,nuevoActor,obtenerActor,editarActor,eliminarActor};