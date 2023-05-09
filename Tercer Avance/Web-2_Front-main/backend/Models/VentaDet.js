import mongoose from "mongoose";


const ventadetSchema = mongoose.Schema({


PrecioVenta:{
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

const VentaDet = mongoose.model("VentaDet",ventadetSchema);
export default VentaDet;