import mongoose from "mongoose";


const actorSchema = mongoose.Schema({

nombre:{
        type: String,
        require: true,
        trim: true
       
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

const Actor = mongoose.model("Actor",actorSchema);
export default Actor;