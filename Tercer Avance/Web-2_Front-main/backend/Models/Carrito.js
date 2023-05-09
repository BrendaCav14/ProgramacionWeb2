import mongoose from "mongoose";


const carritoSchema = mongoose.Schema({

Total:{
        type: mongoose.Schema.Types.Decimal128,
        require: true,
        trim: true,
        
},

carritoDetalle: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"CarritoDet",
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

const Carrito = mongoose.model("Carrito",carritoSchema);
export default Carrito;