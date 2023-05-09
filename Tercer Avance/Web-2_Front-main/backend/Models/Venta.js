import mongoose from "mongoose";


const ventaSchema = mongoose.Schema({

Total:{
        type: mongoose.Schema.Types.Decimal128,
        require: true,
        trim: true,
        
},

VentaDet:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Venta",
},

cliente:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Usuario",
},

},
{
    timestamps:true

});

const Venta = mongoose.model("Venta",ventaSchema);
export default Venta;