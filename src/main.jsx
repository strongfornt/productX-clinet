import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextProvider from './ContextProvider/ContextProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router.jsx'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
          <HelmetProvider>
          <RouterProvider router={router} />
          </HelmetProvider>
          <Toaster/>
    </ContextProvider>
  </StrictMode>,
)
