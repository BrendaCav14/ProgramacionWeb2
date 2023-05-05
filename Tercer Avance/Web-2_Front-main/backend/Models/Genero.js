import mongoose from "mongoose";


const GeneroSchema = mongoose.Schema({

nombre:{
        type: String,
        require: true,
        trim: true
},
descripcion:{
    type: String,
    require: true,
    trim: true
},
administrador:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Usuario",
},

},
{
timestamps:true,
});

const Genero = mongoose.model("Genero",GeneroSchema);
export default Genero;