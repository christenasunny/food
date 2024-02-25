import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema([{
    name:{
        type:String
    },
    image:{
        type:String
    },
    quantity:{
        type:Number
    },
}])

export const CartModel = new mongoose.model("cart",CartSchema)