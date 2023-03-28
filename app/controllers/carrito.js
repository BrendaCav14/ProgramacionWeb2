const Carrito = require('./carrito.model');

// Controlador de carrito
module.exports = {
  crearCarrito: async (req, res) => {
    try {
      const nuevoCarrito = await Carrito.create(req.body);
      res.status(201).json(nuevoCarrito);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  obtenerCarritos: async (req, res) => {
    try {
      const carritos = await Carrito.find();
      res.status(200).json(carritos);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  obtenerCarritoPorId: async (req, res) => {
    try {
      const carrito = await Carrito.findById(req.params.id);
      if (!carrito) {
        return res.status(404).json({ mensaje: 'Carrito no encontrado' });
      }
      res.status(200).json(carrito);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  actualizarCarrito: async (req, res) => {
    try {
      const carrito = await Carrito.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!carrito) {
        return res.status(404).json({ mensaje: 'Carrito no encontrado' });
      }
      res.status(200).json(carrito);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  },
  eliminarCarrito: async (req, res) => {
    try {
      const carrito = await Carrito.findByIdAndDelete(req.params.id);
      if (!carrito) {
        return res.status(404).json({ mensaje: 'Carrito no encontrado' });
      }
      res.status(200).json({ mensaje: 'Carrito eliminado exitosamente' });
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }
};
