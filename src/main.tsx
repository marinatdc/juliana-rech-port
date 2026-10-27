import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/index.css'
import AppRoutes from './routes'

const app = (
  <StrictMode>
    <AppRoutes />
  </StrictMode>
)
const root = document.getElementById('root')!
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
