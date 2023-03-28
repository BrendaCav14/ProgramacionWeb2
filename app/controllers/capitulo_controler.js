const Capitulo = require('../models/capituloModel');

// Obtener todos los capítulos
exports.getAllCapitulos = async (req, res) => {
  try {
    const capitulos = await Capitulo.find().populate('serie');
    res.status(200).json({
      status: 'success',
      results: capitulos.length,
      data: capitulos
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};

// Crear un nuevo capítulo
exports.createCapitulo = async (req, res) => {
  try {
    const capitulo = await Capitulo.create(req.body);
    res.status(201).json({
      status: 'success',
      data: capitulo
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

// Obtener un capítulo por su ID
exports.getCapituloById = async (req, res) => {
  try {
    const capitulo = await Capitulo.findById(req.params.id).populate('serie');
    res.status(200).json({
      status: 'success',
      data: capitulo
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Capítulo no encontrado'
    });
  }
};

// Actualizar un capítulo por su ID
exports.updateCapituloById = async (req, res) => {
  try {
    const capitulo = await Capitulo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('serie');
    res.status(200).json({
      status: 'success',
      data: capitulo
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

// Eliminar un capítulo por su ID
exports.deleteCapituloById = async (req, res) => {
  try {
    await Capitulo.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Capítulo no encontrado'
    });
  }
};
