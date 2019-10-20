import React from 'react'

import './Header.css';

function Header() {
  return (
    <div className="main-header">
      <p className="main-title">
        The Best Online
        Book Shop
      </p>
      <p className="main-sub-title">
        Boighor specifically created for authors and writes to present
        and sell their books online
      </p>
      <div className="main-button">
        <a href="/">
          Shop Now
        </a>
      </div>
    </div>
  )
}

export default Header
