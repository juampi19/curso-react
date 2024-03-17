import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { MarvelPage } from './heroes/pages/MarvelPage'
import ErrorPage from './ErrorPage'
import { DCPage } from './heroes/pages/DCPage'
import { Login } from './auth/pages/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Navigate to={'/marvel'}/>,
    errorElement: <ErrorPage />
  },
  {
    path: "marvel",
    element: <MarvelPage />
  },
  {
    path: "dc",
    element: <DCPage />
  },
  {
    path: 'login',
    element: <Login />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider router={ router } />
    
  </React.StrictMode>,
)
