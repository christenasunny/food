import React, { useState, useEffect } from 'react';
import './order.css';

export default function Order() {
  const [orderlist, setOrderlist] = useState([]);

  useEffect=(() => {
    // Retrieve data from localStorage and update the state
    const storedDataString = window.localStorage.getItem("cartItems");
    const parsedData = JSON.parse(storedDataString) || [];
    setOrderlist(parsedData);
  },[])

  return (
    <div className="order-container">
      <h2 className="order-heading">Order Details</h2>
      <div className="order-list">
        {orderlist.map((orderItem, index) => (
          <div key={index} className="order-item">
            <div className="order-item-name"><b>{orderItem.name}</b></div>
            <div className="order-item-quantity">Quantity: {orderItem.quantity}</div>
            <div className="image-container">
              <img src={`http://localhost:3001/images/${orderItem.image}`} alt="Image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
