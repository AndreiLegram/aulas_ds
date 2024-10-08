import React from 'react';
import axios from 'axios';
function MyErrors() {
  axios.get('https://reqres.in/api/users/22')
    .then(response => console.log('data is', response.data))
    .catch(err => {
      if (err.response) {
        // a requisição foi concluída e uma resposta foi retornada
        // com código de status no intervalo 3xx / 4xx / 5xx
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // requisição foi feita, mas o servidor não retornou resposta
        console.log(err.request);
      } else {
        // ocorreu um erro ao configurar a requisição
        console.error('Error:', err.message);
      }
    });
  return (
    <p>Teste de Erros com API Axios</p>
  );
}
export default MyErrors;
