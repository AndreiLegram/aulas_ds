import React from 'react'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import BookForm from '../components/BookForm'

export function loader({ params }) {
  return axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${params.id}`)
    .then(response => response.data)
    .catch(err => {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.error('Error:', err.message);
      }
    });
}

function GetBook() {
  const book = useLoaderData();
  return (
    <BookForm props={book} />
  );
}

export default GetBook