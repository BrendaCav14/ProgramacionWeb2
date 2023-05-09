import mongoose from "mongoose";


const carritodetSchema = mongoose.Schema({

Precio:{
        type: mongoose.Schema.Types.Decimal128,
        require: true,
        trim: true,
        
},

Importe:{
    type: mongoose.Schema.Types.Decimal128,
    require: true,
    trim: true,
        
},

Pelicula:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Pelicula",
    require: false,
},

Serie:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Serie",
    require: false,
},

cliente:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Usuario",
},

},
{
    timestamps:true

});

const CarritoDet = mongoose.model("CarritoDet",carritodetSchema);
export default CarritoDet;