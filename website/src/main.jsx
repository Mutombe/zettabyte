import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ZettabyteWebsite from './App'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ZettabyteWebsite />
    </BrowserRouter>
  </StrictMode>,
)