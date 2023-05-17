import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountContextProvider from './contexts/CountContext.jsx'
import LocaleContextProvider from './contexts/LocaleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocaleContextProvider>
      <CountContextProvider>
        <App />
      </CountContextProvider>
    </LocaleContextProvider>
  </React.StrictMode>
)
