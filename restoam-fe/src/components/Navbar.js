
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="/images/gear.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          RestoAM: Asset
        </a>
      </nav>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Go To
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Dashboard</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Asset</a>
              <a className="dropdown-item" href="#">Location</a>
              <a className="dropdown-item" href="#">WorkOrder</a>
            </div>
          </li>
        </ul>
        </div>
    </nav>
  );
}

export default Navbar;