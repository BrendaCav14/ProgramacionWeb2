const mongoose = require('mongoose'); 


const ventaSchema = new mongoose.Schema({
  ID_venta: {
    type: Number,
    required: true
  },
  Total: {
    type: Number,
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

const venta = mongoose.model('venta', ventaSchema);

module.exports = venta;