import mongoose from "mongoose";


const plataformaSchema = mongoose.Schema({

nombre:{
        type: String,
        require: true,
        trim: true
       
},

enlace:{
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

const Plataforma = mongoose.model("Plataforma",plataformaSchema);
export default Plataforma;