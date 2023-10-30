import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <Navigation/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
