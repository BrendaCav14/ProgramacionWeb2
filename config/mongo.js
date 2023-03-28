const mongoose = require('mongoose');

const DB_URI = "mongodb://127.0.0.1:27017/Renta_Pelis"

 

// URL de conexión a la base de datos de MongoDB


// Opciones de conexión
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Conexión a la base de datos


module.exports = ()=>{
    const connect =()=>{
        mongoose.connect(DB_URI, options)
        .then(() => {
            console.log('Conexión exitosa a la base de datos');
        })
        .catch((err) => {
            console.error('Error al conectar a la base de datos:', err);
        });

    }
   

    connect();
}