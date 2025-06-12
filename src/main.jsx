import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import CatFactsApp from './CatFactsApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CatFactsApp />
  </StrictMode>,
)
