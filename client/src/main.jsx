import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Register from './pages/register/Register'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {

    path: "/register",
    element: <Register/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
