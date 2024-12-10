import React from 'react';
import axios from 'axios';

function PutBook(book) {
  return axios.put(`http://localhost:3000/api/books/${book._id}`, book);
}

export default PutBook;
