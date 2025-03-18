import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import IniciarSesion from './IniciarSesion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IniciarSesion/>
  </StrictMode>,
)
