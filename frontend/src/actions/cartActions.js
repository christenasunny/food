export const addToCart = (food,quantity)=>{

    const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};

   return (dispatch ,getState)=>{

        var cartItem = {
            user:userInfo._id,
            name:food.name,
            _id:food._id,
            image : food.image,
            quantity: Number(quantity),
            prices : Number(food.price),
            price : Number(food.price)* quantity
        }

        if(cartItem.quantity >10)
        {
            alert("you cannot Add more than 10 quantities")
        }
        else{
            if(cartItem.quantity<1)
            {
                dispatch({type:"DELETE_FROM_CART" , payload:food})
            }
            else{
                dispatch({type:'ADD_TO_CART',payload:cartItem})
            }
            
        }
        

        const cartItems = getState().cartReducer.cartItems
        localStorage.setItem('cartItems' , JSON.stringify(cartItems))
    }
}


export const deleteFromCart = (food)=>(dispatch,getState)=>{
  
    dispatch({type:"DELETE_FROM_CART" , payload:food})


    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))

}
