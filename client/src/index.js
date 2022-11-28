import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Register from './pages/register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {

    path: "/register",
    element: <Register/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
