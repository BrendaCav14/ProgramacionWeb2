const mongoose = require('mongoose');

const CarritoSchema = new mongoose.Schema({

    ID_carrito: {
        type: Number,
        required: true
      },
  total: {
    type: Number,
    required: true
  },
  fk_administrador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  fk_cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Carrito', CarritoSchema);
