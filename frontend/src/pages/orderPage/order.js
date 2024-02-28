import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './order.css';

export default function Order() {
  const [orderlist, setOrderlist] = useState([]);
  const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};

  useEffect(() => {
    axios.get("http://localhost:3001/cart/getcart/cartitems")
      .then((result) => {
        setOrderlist(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
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
                    <img src={`http://localhost:3001/images/${product.image}`} alt="Image" />
                  </div>
                </div>
              ))}
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
}
