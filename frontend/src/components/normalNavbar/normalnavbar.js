import React from 'react';

export default function Normalnavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Home</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/Login"><b>Login</b></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
