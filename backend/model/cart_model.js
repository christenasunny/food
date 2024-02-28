import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema({
    ownerID:{
        type:String
    },
    name:{
        type:String
    },
    products:[{
        name:{
            type:String,
            require:true,
        },
        price:{
            type:Number,
            
        },
        image:{
            type:String,
        },
        quantity:{
            type:Number
        }
    }]
})

export const CartModel = new mongoose.model("cart",CartSchema)