import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import toast, {Toaster} from "react-hot-toast"
// Routes Config 

import { RouterProvider } from 'react-router-dom'
import router from './routes/router.tsx'

import './styles/globals.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <Toaster />
  </StrictMode>,
)


