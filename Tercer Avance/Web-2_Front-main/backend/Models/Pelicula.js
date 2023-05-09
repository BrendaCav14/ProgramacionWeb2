import mongoose from "mongoose";


const peliculaSchema = mongoose.Schema({

titulo:{
        type: String,
        require: true,
        trim: true
       
},


sinopsis:{
    type: String,
    require: true,
    trim: true
   
},

añoEstreno:{
    type: String,
    require: true,
    trim: true
   
},


Generos:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Genero",
    },


],// Coleccion varios Generos


Director:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Director",


}, // Coleccion Director

Actores:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Actor",
    },


],// Coleccion varios Actores


Clasificacion:{
    type: String,
    requierd: true,
    enum: ["G", "PG", "PG-13", "R", "NC-17"],


}, // Clasificaciones


Calificacion:{
    type: String,
    requierd: true,
    enum: ["1", "2", "3", "4", "5"],
}, // Calificacion

Duracion:{
    type: String,
    requierd: true,
    trim: true,
}, // Duracion




// TODO: REVISAR TIPOS DE DATO PARA IMAGENES Y VIDEO

Poster:{
    type: String,
    requierd: false,
    trim: true,
}, // Poster foto

FotoPeli:{
    type: String,
    requierd: false,
    trim: true,
}, // Foto pelicula

Trailer:{
    type: String,
    requierd: false,
    trim: true,
}, // Video trailer 

// TODO: REVISAR TIPOS DE DATO PARA IMAGENES Y VIDEO




Precio_Compra:{
    type: mongoose.Schema.Types.Decimal128,
    requierd: false,
    trim: true,
}, // Precio de compra

Precio_Renta:{
    type: mongoose.Schema.Types.Decimal128,
    requierd: false,
    trim: true,
}, // Precio de renta

Plataformas:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Plataforma",
    },


],// Coleccion Plataformas



administrador:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Usuario",
}, /// usuario administrador

},
{
timestamps:true,
});

const Pelicula = mongoose.model("Pelicula",peliculaSchema);
export default Pelicula;