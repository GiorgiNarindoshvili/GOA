import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const container  = document.getElementById("container")
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
