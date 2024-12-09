import React from 'react';
import axios from 'axios';
function DeleteBook(book) {
  axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${book.id}`)
    .then(res => console.log(res));
  return (
    <p>Teste de DELETE com API Axios</p>
  );
}
export default DeleteBook;