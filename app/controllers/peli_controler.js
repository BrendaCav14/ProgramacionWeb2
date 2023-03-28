const Pelicula = require('../models/pelicula');

// Controlador de película
module.exports = {
  crearPelicula: async (req, res) => {
    try {
      const nuevaPelicula = await Pelicula.create(req.body);
      res.status(201).json(nuevaPelicula);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  obtenerPeliculas: async (req, res) => {
    try {
      const peliculas = await Pelicula.find();
      res.status(200).json(peliculas);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  obtenerPeliculaPorId: async (req, res) => {
    try {
      const pelicula = await Pelicula.findById(req.params.id);
      if (!pelicula) {
        return res.status(404).json({ mensaje: 'Película no encontrada' });
      }
      res.status(200).json(pelicula);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  actualizarPelicula: async (req, res) => {
    try {
      const pelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!pelicula) {
        return res.status(404).json({ mensaje: 'Película no encontrada' });
      }
      res.status(200).json(pelicula);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  eliminarPelicula: async (req, res) => {
    try {
      const pelicula = await Pelicula.findByIdAndDelete(req.params.id);
      if (!pelicula) {
        return res.status(404).json({ mensaje: 'Película no encontrada' });
      }
      res.status(200).json({ mensaje: 'Película eliminada exitosamente' });
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }
};
