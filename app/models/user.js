const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema(

{
    ID_Usuario: {
        
        type: Number,
        unique: true,
        required: true
    },
    Nombre: {
            
        type: String
    },
    Segundo_Nombre: {
            
        type: String
    },
    ApellidoPa: {
            
        type: String
    },
    ApellidoMa: {
            
        type: String
    },
    Email: {
            
        type: String
    },
    Username: {
            
        type: String,
        unique: true
    },
    Contrasena:{
            
        type: String,
        
        required: true
    },
    rol:
    {
        type: String,
        enum: ['Admin','Cliente']
    },
    fecha:{
        type: Date
    }

}
)

module.exports = mongoose.Model('Usuario', UserSchema)