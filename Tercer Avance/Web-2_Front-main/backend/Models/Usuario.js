import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = mongoose.Schema({

usuario:{
        type: String,
        require: true,
        trim: true,
        unique: true
},
nombre:{
    type: String,
    require: true,
    trim: true
},
nombre2:{
    type: String,
    require: true,
    trim: true
},
apPaterno:{
    type: String,
    require: true,
    trim: true
},
apMaterno:{
    type: String,
    require: true,
    trim: true
},
password:{
    type: String,
    require: true,
    trim: true
},
email:{
    type: String,
    require: true,
    trim: true,
    unique: true
},
FechaNac:{
    type: Date,
    require: true,
    trim: true
},
TipoCuenta:{
    type: String,
    enum: ['Administrador', 'Cliente'],
    require: true,
    trim: true
},
foto:{
   type: String,
   require: false,

},
token:{
    type: String,
},
confirmar:{
    type: Boolean,
    default: false,
},
},
{
timestamps:true,
});

usuarioSchema.pre('save',async function(next){

   if(!this.isModified("password")){
       next();

   }

   const salt = await bcrypt.genSalt(10);
   this.password =await bcrypt.hash(this.password, salt);
});

//funciones
usuarioSchema.methods.comprobarPassword = async function(passwordForm){
   return await bcrypt.compare(passwordForm, this.password)
}

const Usuario = mongoose.model("Usuario",usuarioSchema);
export default Usuario;