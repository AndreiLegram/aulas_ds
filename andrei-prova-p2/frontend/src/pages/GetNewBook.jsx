import React from 'react'
import { useLoaderData } from 'react-router-dom';
import BookForm from '../components/BookForm'

function GetBook() {
  const book = useLoaderData();
  return (
    <BookForm props={{
      "id": null,
      "title": null,
      "description": null,
      "pageCount": null,
      "excerpt": null,
      "publishDate": null
    }} />
  );
}

export default GetBook