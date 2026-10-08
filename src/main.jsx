import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
// Memanggil file router kita, bukan App.jsx langsung
import './index.css' // Pastikan CSS Tailwind di-import di sini

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)