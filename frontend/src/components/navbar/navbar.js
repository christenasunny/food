import React from 'react';
import "./navbar.css";
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';


export default function Navbar() {
  const cartState = useSelector(state => state.cartReducer);
  const [cookies, setCookies] = useCookies(['access_token']);

  const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};

  const handleLogout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userInfo");
    window.location.href = '/';
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container" >
          <b></b>
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto custom-navbar">
              <li className="nav-item">
                {userInfo.name ? (
                  userInfo.isAdmin ? (
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle name-link"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {userInfo.name}
                      </a>
                      <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/Admin">Task</a>
                        <a className="dropdown-item" href="/Adminorders"><b>Orders</b></a>
                        <a className="dropdown-item" href="#" onClick={handleLogout}><b>Logout</b></a>
                      </div>
                    </div>
                  ) : (
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle name-link"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {userInfo.name}
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/Order"><b>Orders</b></a>
                        <a className="dropdown-item" href="#" onClick={handleLogout}><b>Logout</b></a>
                      </div>
                    </div>
                  )
                ) : (
                  <li className="nav-item">
                    <a className="nav-link" href="/Login"><b>Login</b></a>
                  </li>
                )}
              </li>
              {!userInfo.isAdmin && userInfo._id && (
                <li className="nav-item">
                  <a className="nav-link cart-link" href={`/Cart/${userInfo._id}`}>
                    <b>Cart {cartState.cartItems.length}</b>
                    <span className="cart-icon"></span>
                  </a>
                </li>
              )}
              {!userInfo.isAdmin && userInfo._id && (
                <li className="nav-item">
                  <a className="nav-link cart-link" href={`/Contact/${userInfo._id}`}>
                    <b>Contact</b>
                    <span className="cart-icon"></span>
                  </a>
                </li>
              )}
              {!userInfo.isAdmin && userInfo._id && (
                <li className="nav-item" style={{ color: 'black' }}>
                  <b>Wallet: {userInfo.wallet} Rs</b>
                  <span className="cart-icon"></span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
