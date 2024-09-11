import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Routes Config 

import { RouterProvider } from 'react-router-dom'
import router from './routes/router.tsx'

import App from './App.tsx'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


