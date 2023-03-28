const mongoose = require('mongoose'); 


// Esquema de película
const watchlistSchema = new mongoose.Schema({
  ID_watchlist: {
    type: Number,
    required: true
  },
  Pelicula: {
    type: Number,
    required: true
  }
});

// Modelo de película
const watchlist = mongoose.model('watchlist', watchlistSchema);

module.exports = watchlist;