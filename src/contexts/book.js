import React, { useState, useContext, useEffect } from 'react'

import axios from 'axios';

export const BookContext = React.createContext()

function Book(props) {
  const [ books, setBooks ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:7000/api/books');
      setBooks(books => [...books, ...res.data]);
    }

    fetchData();
  })

  return (
    <BookContext.Provider value={books}>
      {props.children}
    </BookContext.Provider>
  )
}

export default Book
