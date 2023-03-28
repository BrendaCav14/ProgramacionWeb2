const mongoose = require('mongoose'); 


const ventaSchema = new mongoose.Schema({
  ID_venta: {
    type: Number,
    required: true
  },
  calificacion: {
    type: Number,
    required: true
  },
  comentario: {
    type: String,
    required: true
  },
  FK_Administrador: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario', 
    required: true },
    FK_Cliente: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Usuario', 
      required: true },
  Fecha: {
    type: Date,
    required: true,
    default: Date.now
  }

 
});

const venta = mongoose.model('ventaSchema', actorSchema);

module.exports = venta;