const Genero = require('./genero.model');

// Controlador de género
module.exports = {
  crearGenero: async (req, res) => {
    try {
      const nuevoGenero = await Genero.create(req.body);
      res.status(201).json(nuevoGenero);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  obtenerGeneros: async (req, res) => {
    try {
      const generos = await Genero.find();
      res.status(200).json(generos);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  obtenerGeneroPorId: async (req, res) => {
    try {
      const genero = await Genero.findById(req.params.id);
      if (!genero) {
        return res.status(404).json({ mensaje: 'Género no encontrado' });
      }
      res.status(200).json(genero);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  actualizarGenero: async (req, res) => {
    try {
      const genero = await Genero.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!genero) {
        return res.status(404).json({ mensaje: 'Género no encontrado' });
      }
      res.status(200).json(genero);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  eliminarGenero: async (req, res) => {
    try {
      const genero = await Genero.findByIdAndDelete(req.params.id);
      if (!genero) {
        return res.status(404).json({ mensaje: 'Género no encontrado' });
      }
      res.status(200).json({ mensaje: 'Género eliminado exitosamente' });
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }
};
