const mongoose = require('mongoose');

const capituloSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  sinopsis: { type: String, required: true },
  temp_num: { type: Number, required: true },
  cap_num: { type: Number, required: true },
  serie: { type: mongoose.Schema.Types.ObjectId, ref: 'Serie', required: true }
});

const Capitulo = mongoose.model('Capitulo', capituloSchema);

module.exports = Capitulo;
