import mongoose from "mongoose";


const directorSchema = mongoose.Schema({

nombre:{
        type: String,
        require: true,
        trim: true,
        
},
apellido:{
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

const Director = mongoose.model("Director",directorSchema);
export default Director;