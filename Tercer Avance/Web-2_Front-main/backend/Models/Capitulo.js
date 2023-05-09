import mongoose from "mongoose";


const capituloSchema = mongoose.Schema({

titulo:{
        type: String,
        require: true,
        trim: true
       
},


sinopsis:{
    type: String,
    require: true,
    trim: true
   
},


Temporada_num:{
    type: Number,
    require: true,
    trim: true
},


Capitulo_num:{
    type: Number,
    require: true,
    trim: true
},



Serie: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Serie",
},



administrador:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Usuario",
}, /// usuario administrador



},
{
timestamps:true,
});

const Capitulo = mongoose.model("Capitulo",capituloSchema);
export default Capitulo;