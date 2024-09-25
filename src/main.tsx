import React from 'react'
import { App } from './App.tsx'
import ReactDOM from 'react-dom/client'

// import { createBrowserRouter, RouterProvider } from "react-router-dom"

// const router = createBrowserRouter([]); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
