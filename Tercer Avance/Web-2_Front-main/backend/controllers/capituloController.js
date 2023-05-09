import Capitulo from "../Models/Capitulo.js";

const obtenerCapitulos = async (req,res)=>{
const capitulos = await Capitulo.find();

res.json(capitulos);
};

const nuevoCapitulo = async (req,res)=>{

const capitulo = new Capitulo(req.body);
capitulo.administrador = req.usuario._id;


try {
    const capituloAlmacenado = await capitulo.save();
    res.json(capituloAlmacenado);
} catch (error) {
    const errorv = new Error("Nombre ya Registrado");
    return res.status(401).json({msg: errorv.message});
    
}

};

const obtenerCapitulo = async (req,res)=>{
    const { id } = req.params;
    const capitulo = await Capitulo.findById(id);

    if(!capitulo){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(capitulo.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    res.json(capitulo);

};

const editarCapitulo = async (req,res)=>{
    const { id } = req.params;
    const capitulo = await Capitulo.findById(id);

    if(!capitulo){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(capitulo.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    capitulo.titulo = req.body.titulo || capitulo.titulo;
    capitulo.sinopsis = req.body.sinopsis || capitulo.sinopsis;
    capitulo.Temporada_num = req.body.Temporada_num || capitulo.Temporada_num;
    capitulo.Capitulo_num = req.body.Capitulo_num || capitulo.Capitulo_num;
    
    try {
        const capituloAlmacenado = await capitulo.save();
        res.json(capituloAlmacenado);
    } catch (error) {
        console.log(error);
    }

};

const eliminarCapitulo = async (req,res)=>{
    const { id } = req.params;
    const capitulo = await Capitulo.findById(id);

    if(!capitulo){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(capitulo.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    try {
        await capitulo.deleteOne();
        res.json({msg: "Capitulo Eliminado"})
    } catch (error) {
        console.log(error);
    }


};

export{obtenerCapitulos,nuevoCapitulo,obtenerCapitulo,editarCapitulo,eliminarCapitulo};