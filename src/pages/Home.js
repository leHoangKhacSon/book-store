import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Menu from '../components/Menu';
import Header from '../components/Header';
import HotBook from '../components/HotBook';
import { getToken } from '../heplers/jwt';
import './Home.css';

function Home() {
  let history = useHistory();
  const [ books, setBooks ] = useState([]);
  // fetch data from server
  useEffect(() => {
    // fetch token in client
    const jwt = getToken();
    // check jwt exists yes or no ?
    // not exists: back to login page
    if(!jwt) {
      history.push('/login');
      return;
    }
    // exists: send post request
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:7000/api/books', {
          headers: { authorization: `Bearer ${jwt}`}
        });
        setBooks(books => [...books, ...res.data]);
      } catch (error) {
        // localStorage.removeItem('authorization');
        // history.push('/login');
      }
    }
    fetchData();
  }, [])

  return (
    <React.Fragment>
      <div className="header">
        <Menu />
        <Header />
      </div>
      <section className="hot-products">
        <p className="hot-products-title">
          Hot Products
        </p>
        <p className="hot-products-sub-title">
          Boighor specifically created for authors and writes to present and sell their books online
        </p>
        <div className="hot-products-list">
          { books.map((book, index) => (
            <HotBook 
              key={index}
              sale={20}
              name={book.name}
              price={book.price}
              url={book.img} 
            />
          ))}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
