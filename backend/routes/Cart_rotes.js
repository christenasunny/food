import express from 'express'
import { CartModel } from '../model/cart_model.js'

const router = express.Router()


router.get("/cartitems", async (req, res) => {

    try {
        const getCart = await CartModel.find({});

        if (getCart.length > 0) {
            return res.json(getCart);
        } else {
            return res.status(404).json({ message: "Cart is empty" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/cart",async(req,res)=>{
    const{ownerID,name,cartItems}=req.body
    try{
        const newCart=await new CartModel({ownerID,name,products:cartItems})
       if(newCart)
       {
       await newCart.save()
       return res.json({message:"successfull"})
    }
       else{
        return res.json({message:"cannot add to database"})
       }
    }
    catch(err){
        console.log(err)
    }
})


  


export { router as CartRouter}