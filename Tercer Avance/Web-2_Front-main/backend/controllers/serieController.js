import Serie from "../Models/Serie.js";

const obtenerSeries = async (req,res)=>{
const series = await Serie.find();

res.json(series);
};

const nuevoSerie = async (req,res)=>{

const serie = new Serie(req.body);
serie.administrador = req.usuario._id;


try {
    const serieAlmacenado = await serie.save();
    res.json(serieAlmacenado);
} catch (error) {
    const errorv = new Error("Nombre ya Registrado");
    return res.status(401).json({msg: errorv.message});
    
}

};

const obtenerSerie = async (req,res)=>{
    const { id } = req.params;
    const serie = await Serie.findById(id);

    if(!serie){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(serie.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    res.json(serie);

};

const editarSerie = async (req,res)=>{
    const { id } = req.params;
    const serie = await Serie.findById(id);

    if(!serie){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(serie.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    serie.titulo = req.body.titulo || serie.titulo;
    serie.sinopsis = req.body.sinopsis || serie.sinopsis;
    serie.Generos = req.body.Generos || serie.Generos;
    serie.Director = req.body.Director || serie.Director;
    serie.Actores = req.body.Actores || serie.Actores;
    serie.Clasificacion = req.body.Clasificacion || serie.Clasificacion;
    serie.Calificacion = req.body.Calificacion || serie.Calificacion;
    serie.Poster = req.body.Poster || serie.Poster;
    serie.FotoSerie = req.body.FotoSerie || serie.FotoSerie;
    serie.Trailer = req.body.Trailer || serie.Trailer;
    serie.Precio_Compra = req.body.Precio_Compra || serie.Precio_Compra;
    serie.Precio_Renta = req.body.Precio_Renta || serie.Precio_Renta;
    serie.Plataformas = req.body.Plataformas || serie.Plataformas;
    
    try {
        const serieAlmacenado = await serie.save();
        res.json(serieAlmacenado);
    } catch (error) {
        console.log(error);
    }

};

const eliminarSerie = async (req,res)=>{
    const { id } = req.params;
    const serie = await Serie.findById(id);

    if(!serie){
        const error = new Error("No Encontrado");
        return res.status(404).json({msg: error.message});
    }

    if(serie.administrador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no Valida");
        return res.status(401).json({msg: error.message});
    }

    try {
        await serie.deleteOne();
        res.json({msg: "Serie Eliminada"})
    } catch (error) {
        console.log(error);
    }


};

export{obtenerSeries,nuevoSerie,obtenerSerie,editarSerie,eliminarSerie};