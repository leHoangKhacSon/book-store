import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Menu from '../components/Menu';
import Header from '../components/Header';
import HotBook from '../components/HotBook';
import { BookContext } from '../contexts/book';
import './Home.css';

function Home() {
  const [ books, setBooks ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://7x5xg.sse.codesandbox.io/books');
      setBooks(books => [...books, ...res.data]);
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
            <HotBook key={index} url={book.img} />
          ))}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home