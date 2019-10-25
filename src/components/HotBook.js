import React from 'react'
import PropTypes from 'prop-types';

import './HotBook.css';

function HotBook({name, price, url, sale}) {
  const priceSale = price*(100-sale)/100;
  return (
    <div className="hot-products-item">
      <div className="product-info">
        <p className="sale-off">
          {sale}% OFF
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
        {name}
      </p>
      <p className="price">
        <span>${price}.00</span>
        <span>${priceSale}.00</span>
      </p>
    </div>
  )
}

HotBook.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
  sale: PropTypes.number
}

export default HotBook
