import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import { deleteFromCart } from '../../actions/cartActions';
import './CartPage.css';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Cart() {
  const cartState = useSelector(state => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  var subtotal = cartItems.reduce((x, items) => x + items.price, 0)
  const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};
  const wallet = userInfo.wallet

  const updateLocalStorage = (newWallet) => {
    window.localStorage.setItem("userInfo", JSON.stringify({ ...userInfo, wallet: newWallet }));
  };


  const handleSubmit = async () => {
    try {
      const newWallet = wallet - subtotal
      const ownerID = userInfo._id
      const name = userInfo.name
      if (newWallet >= 0) {
        updateLocalStorage(newWallet)
        await axios.put(`https://online-food-website.onrender.com/UpdateUser/${userInfo._id}`, { wallet: newWallet})
        await axios.post("https://online-food-website.onrender.com/user/cart", { ownerID, name, cartItems })
          .then((result) => {
            alert(result.data.message)
            navigate('/Order')
            window.location.reload()
          })
          .catch((err) => {
            alert('error')
          })
        window.localStorage.removeItem("cartItems");
      }
      else{
        alert("Dont have enough amount on wallet")
      }
    }
    catch (err) {
      console.log("error")
    }
  };

  return (
    <div style={{ marginTop: '90px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5 mb-5">
          <h2 style={{ fontSize: "40px", color: "#333", fontFamily: "cursive", textAlign: "center", textShadow: "2px 2px 2px #ccc" }}>My Cart</h2>
          {cartItems.map((items) => (
            <div className="flex-container" key={items._id}>
              <div className='text-left m-1'>
                <p style={{ fontSize: "25px", color: "#008080", fontWeight: "bold" }}>{items.name} <span style={{ fontSize: "14px", color: "#666" }}></span></p>
                <p style={{ fontSize: "15px", color: "#333", margin: "0", marginBottom: '5px', textAlign: "left" }}>Price: {items.price} Rs</p>
                <div className="quantity-container">
                  <div className="centered-content">
                    <p style={{ fontSize: "16px", margin: "0", color: "#008080", fontWeight: "bold" }}>Quantity: {items.quantity}</p>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="flex-container">
                <div className="image-container">
                  <img src={`https://online-food-website.onrender.com/images/${items.image}`} style={{ height: '80px', width: '80px', borderRadius: "50%", boxShadow: "2px 2px 5px #888" }} alt="Image" />
                </div>
                <FaTrash style={{ color: 'red', marginLeft: '10px', fontSize: "20px" }} onClick={() => { dispatch(deleteFromCart(items)) }} />
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 text-right">
          <h3>Subtotal : {subtotal} RS</h3>
          <button className='btn btn-standard' onClick={handleSubmit}> check out</button>
        </div>
      </div>
    </div>
  );
}