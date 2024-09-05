import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextProvider from './ContextProvider/ContextProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
          <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
