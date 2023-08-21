import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import Logo from './Logo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='box1'>
    <Logo/>
    <Header/>&nbsp;
    <App />
    </div>
  </React.StrictMode>,
)
