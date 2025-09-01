import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fontsource/inter/400.css"; // regular
import "@fontsource/inter/700.css"; // bold
import './index.css'
import App from './App.tsx'

// import Login from './features/auth/pages/login.tsx';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <App />
     </QueryClientProvider>
  </StrictMode>,
)
