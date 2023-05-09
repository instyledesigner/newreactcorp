import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container _pb-5">
    <nav className="navbar bg-light fixed-top shadow" aria-label="Light offcanvas navbar">
    <div className="container">
	    <NavLink to="/" className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4 text-uppercase"><span className='display-6'>mollis</span><span className='h1'>interdum</span></span>
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLightLabel">Offcanvas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/investors" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Investors
              </NavLink>
              <ul className="dropdown-menu">
                <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/investors/prlanding">Press Release</NavLink></li>
                <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/investors/shareprice">Shareprice</NavLink></li>
              </ul>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link" to="/media">Media</NavLink>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Header