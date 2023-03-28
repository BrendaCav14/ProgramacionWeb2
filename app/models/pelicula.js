const mongoose = require('mongoose'); 


// Esquema de película
const peliculaSchema = new mongoose.Schema({
  ID_Pelicula: {
    type: Number,
    required: true
  },
  Titulo: {
    type: String,
    required: true
  },
  Sinopsis: {
    type: String,
    required: true
  },
  Año_Lanzamiento: {
    type: Date,
    required: true
  },
  Genero: {
    type: String,
    required: true
  },
  Director: {
    type: String,
    required: true
  },
  Actor: {
    type: String,
    required: true
  },
  Clasificacion: {
    type: String, 
    enum: ['G', 'PG', 'PG-13', 'R', 'NC - 17'],
    required: true
  },
  Calificacion: {
    type: Number,
    required: true
  },
  Duracion: {
    type: Number,
    required: true
  },
  Poster: {
    type: Buffer,
    required: true
  },
  Foto1: {
    type: Buffer,
    required: true
  },
  Foto2: {
    type: Buffer,
    required: true
  },
  Foto3: {
    type: Buffer,
    required: true
  },
  Trailer: {
    type: Buffer,
    required: true
  },
  Precio_Compra: {
    type: Number,
    required: true
  },
  Precio_Renta: {
    type: Number,
    required: true
  },
  Plataforma: {
    type: String,
    enum: ['Disneyplus', 'Netflix', 'Amazon Prime'],
    required: true
  }
});

// Modelo de película
const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;

