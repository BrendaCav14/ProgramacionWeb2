const mongoose = require('mongoose'); 


// Esquema de película
const actorSchema = new mongoose.Schema({
  ID_Actor: {
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
const actor = mongoose.model('actor', actorSchema);

module.exports = actor;