import React from 'react';
import axios from 'axios';

function DeleteBook(book) {
  return axios.delete(`http://localhost:3000/api/books/${book._id}`);
}

export default DeleteBook;
