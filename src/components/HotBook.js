import React from 'react'

import './HotBook.css';

function HotBook({url}) {
  return (
    <div className="hot-products-item">
      <div className="product-info">
        <p className="sale-off">
          20% OFF
        </p>
        <div className="product-img">
          <div className="over-lay">
            <p>Add to cart</p>
            <p>Share</p>
          </div>
          <img src={url}alt="..." />
        </div>
      </div>
      
      <p className="product-name">
        Dac Nhan Tam
      </p>
      <p className="price">
        <span>$300.00</span>
        <span>$600.00</span>
      </p>
    </div>
  )
}

export default HotBook
