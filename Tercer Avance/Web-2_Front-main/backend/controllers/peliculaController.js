import Pelicula from "../Models/Pelicula.js";

const obtenerPeliculas = async (req,res)=>{
const peliculas = await Pelicula.find();

res.json(peliculas);
};

const nuevoPelicula = async (req,res)=>{

const pelicula = new Pelicula(req.body);
pelicula.administrador = req.usuario._id;


try {
    const peliculaAlmacenado = await pelicula.save();
    res.json(peliculaAlmacenado);
} catch (error) {
    const errorv = new Error("Nombre ya Registrado");
    return res.status(401).json({msg: errorv.message});
    
}

};

const obtenerPelicula = async (req,res)=>{
    const { id } = req.params;
    const pelicula = await Pelicula.findById(id);

    if(!pelicula){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(pelicula.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    res.json(pelicula);

};

const editarPelicula = async (req,res)=>{
    const { id } = req.params;
    const pelicula = await Pelicula.findById(id);

    if(!pelicula){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(pelicula.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    pelicula.titulo = req.body.titulo || pelicula.titulo;
    pelicula.sinopsis = req.body.sinopsis || pelicula.sinopsis;
    pelicula.añoEstreno = req.body.añoEstreno || pelicula.añoEstreno;
    pelicula.Generos = req.body.Generos || pelicula.Generos;
    pelicula.Director = req.body.Director || pelicula.Director;
    pelicula.Actores = req.body.Actores || pelicula.Actores;
    pelicula.Clasificacion = req.body.Clasificacion || pelicula.Clasificacion;
    pelicula.Calificacion = req.body.Calificacion || pelicula.Calificacion;
    pelicula.Duracion = req.body.Duracion || pelicula.Duracion;
    pelicula.Poster = req.body.Poster || pelicula.Poster;
    pelicula.FotoPeli = req.body.FotoPeli || pelicula.FotoPeli;
    pelicula.Trailer = req.body.Trailer || pelicula.Trailer;
    pelicula.Precio_Compra = req.body.Precio_Compra || pelicula.Precio_Compra;
    pelicula.Precio_Renta = req.body.Precio_Renta || pelicula.Precio_Renta;
    pelicula.Plataformas = req.body.Plataformas || pelicula.Plataformas;
    
    try {
        const peliculaAlmacenado = await pelicula.save();
        res.json(peliculaAlmacenado);
    } catch (error) {
        console.log(error);
    }

};

const eliminarPelicula = async (req,res)=>{
    const { id } = req.params;
    const pelicula = await Pelicula.findById(id);

    if(!pelicula){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(pelicula.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    try {
        await pelicula.deleteOne();
        res.json({msg: "Pelicula Eliminada"})
    } catch (error) {
        console.log(error);
    }


};

export{obtenerPeliculas,nuevoPelicula,obtenerPelicula,editarPelicula,eliminarPelicula};