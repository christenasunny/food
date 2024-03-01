import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './order.css';

export default function Order() {
  const [orderlist, setOrderlist] = useState([]);
  const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    axios.get("https://online-food-website.onrender.com/cart/getcart/cartitems")
      .then((result) => {
        setOrderlist(result.data);
        setLoading(false)
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{marginTop:"90px"}}>
        {
          loading ?   <div class="spinner-border text-success"  role="status">
          <span class="sr-only">Loading...</span>
        </div>
        :
        <div className="order-container">
        <h2 className="order-heading">Order Details</h2>
        <div className="order-list">
          {orderlist.map((orderItem, index) => (
            userInfo._id === orderItem.ownerID ? (
              <div className="order-item" key={index}>
                {orderItem.products.map((product, productIndex) => (
                  <div className="order-item-content" key={productIndex}>
                    <div className="order-item-name"><b>{product.name}</b></div>
                    <div className="order-item-quantity">Quantity: {product.quantity}</div>
                    <div className="image-container">
                      <img src={`https://online-food-website.onrender.com/images/${product.image}`} alt="Image" />
                    </div>
                  </div>
                ))}
              </div>
            ) : null
          ))}
        </div>
      </div>
      }
    </div>
   
  );
}
