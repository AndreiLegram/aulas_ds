import React from 'react';
import axios from 'axios';
function PatchBook(book) {
  axios.patch(`https://fakerestapi.azurewebsites.net/api/v1/Books/${book.id}`, book)
    .then(res => console.log(res));
  return (
    <p>Teste de PATCH com API Axios</p>
  );
}
export default PatchBook;
