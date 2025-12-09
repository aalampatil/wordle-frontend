import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WordContextProvider } from './context/Context.jsx'


createRoot(document.getElementById('root')).render(
  
    <WordContextProvider>
    <App />
    </WordContextProvider>
  
)
