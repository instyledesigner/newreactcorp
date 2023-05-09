import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center pt-3 mt-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <NavLink to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">bootstrap</NavLink>
        <span className="mb-3 mb-md-0 text-muted">&copy; 2023 test</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><NavLink className="text-muted" to="/">twitter</NavLink></li>
        <li className="ms-3"><NavLink className="text-muted" to="/">instagram</NavLink></li>
        <li className="ms-3"><NavLink className="text-muted" to="/">facebook</NavLink></li>
      </ul>
    </footer>
    </div>
  )
}

export default Footer