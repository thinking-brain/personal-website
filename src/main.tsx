import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n/config' // must be imported before any component that uses useTranslation
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
