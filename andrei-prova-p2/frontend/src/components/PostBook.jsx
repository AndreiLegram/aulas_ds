import React from 'react';
import axios from 'axios';

function PostBook(book) {
  return axios.post(`http://localhost:3000/api/books`, book);
}

export default PostBook;
