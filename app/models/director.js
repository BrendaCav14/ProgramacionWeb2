const mongoose = require('mongoose'); 


// Esquema de película
const generoSchema = new mongoose.Schema({
  ID_Genero: {
    type: Number,
    required: true
  },
  Nombre: {
    type: String,
    required: true
  },
  Descripcion: {
    type: String,
    required: true
  },
  Fecha: {
    type: Date,
    required: true,
    default: Date.now
  },
});

// Modelo de película
const genero = mongoose.model('genero', generoSchema);

module.exports = genero;