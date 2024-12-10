import React from 'react'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import BookForm from '../components/BookForm'

export function loader({ params }) {
  return axios.get(`http://localhost:3000/api/books/${params.id}`)
    .then(res => res)
    .catch(err => console.log(err));
}

function GetBook() {
  const book = useLoaderData();
  return (
    <BookForm props={book.data} />
  );
}

export default GetBook