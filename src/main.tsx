import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/inter/400.css"; // regular
import "@fontsource/inter/700.css"; // bold
import './index.css'
import App from './App.tsx'
// import Login from './features/auth/pages/login.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
