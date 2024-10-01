import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './assets/pages/Home/Home.tsx';
import { Settings } from './assets/pages/Settings/Settings.tsx';
import { Login } from './assets/pages/Login/Login.tsx';
import { Error } from './Error.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error/>
  }, 
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "/Login",
    element: <Login />
  }
]); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
