import React from 'react'
import { useLoaderData } from 'react-router-dom';
import BookForm from '../components/BookForm'

function GetBook() {
  const book = useLoaderData();
  return (
    <BookForm props={{
      "_id": '',
      "title": null,
      "description": null,
      "publishDate": null,
      "pageCount": null
    }} />
  );
}

export default GetBook