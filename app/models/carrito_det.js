const mongoose = require('mongoose');

const Carrito_detSchema = new mongoose.Schema({

    ID_Carrito_det: {
        type: Number,
        required: true
      },
  precio: {
    type: Number,
    required: true
  },
  fk_carrito: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carrito'
  },
  fk_Pelicula: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pelicul'
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Carrito_det', Carrito_detSchema);
