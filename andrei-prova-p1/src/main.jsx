import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ListBooks from './pages/ListBooks.jsx'
import GetBook, {loader as bookLoader} from './pages/GetBook.jsx'
import GetNewBook from './pages/GetNewBook.jsx'
import ErrorPage from "./pages/ErrorPage.jsx";
import 'semantic-ui-css/semantic.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/livros",
        element: <ListBooks />,
      },
      {
        path: "/livros/new",
        element: <GetNewBook />,
      }, 
      {
        path: "/livros/:id",
        element: <GetBook />,
        loader: bookLoader,
      },        
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
