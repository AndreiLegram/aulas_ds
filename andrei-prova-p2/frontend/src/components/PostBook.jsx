import React from 'react';
import axios from 'axios';
function PostBook(book) {
  axios({
    url: 'https://fakerestapi.azurewebsites.net/api/v1/Books',
    method: 'POST',
    data: book
  })
    .then(res => console.log(res));
  return (
    <p>Teste de POST com API Axios</p>
  );
}
export default PostBook;
