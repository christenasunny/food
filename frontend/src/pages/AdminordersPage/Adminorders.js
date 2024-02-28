import { useState, useEffect } from 'react';
import axios from 'axios';

export const Adminorders = () => {
  const [orderlist, setOrderlist] = useState([]);
  const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};

  useEffect(() => {
    axios.get("http://localhost:3001/cart/getcart/cartitems")
      .then((result) => {
        setOrderlist(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleConfirmOrder = (orderId) => {
    // You can perform any action when the confirm button is clicked
    console.log(`Order ${orderId} confirmed`);
  };

  return (
    <div className="order-container">
      <h2 className="order-heading">Order Details</h2>
      <div className="order-list">
        {orderlist.map((orderItem, index) => (
          <div className="order-item" key={index}>
            <h2 style={{ marginBottom: '30px', color: "green" }}>{orderItem.name}</h2>
            
            {orderItem.products.map((product, productIndex) => (
              <div className="order-item-content" key={productIndex}>
                <div className="order-item-name"><b>{product.name}</b></div>
                <div className="order-item-quantity">Quantity: {product.quantity}</div>
                <div className="order-image-container">
                  <img src={`http://localhost:3001/images/${product.image}`} alt="Image" />
                </div>
              </div>
            ))}
            

            <button className="btn btn-standard" style={{coolor:'blue'}} onClick={() => handleConfirmOrder(orderItem._id)}>
              Confirm Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
