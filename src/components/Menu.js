import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <p className="logo">
        BookStore
      </p>
      <ul className="list-menu">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/login/">Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
