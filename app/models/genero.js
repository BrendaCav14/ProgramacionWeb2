const mongoose = require('mongoose'); 


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
    default: Date.now
  },
});

const genero = mongoose.model('genero', generoSchema);

module.exports = genero;