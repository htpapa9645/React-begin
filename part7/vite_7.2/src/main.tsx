import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {App2} from './App.tsx'
import {App3} from './App.tsx'
import {App4} from './App.tsx'
import {App5} from './App.tsx'
import {App6} from './App.tsx'
import {App7} from './App.tsx'
import {App8} from './App.tsx'
import {App9} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <App2 />
    <App3 />
    <App4 />
    <App5 />
    <App6 />
    <App7 />
    <App8 />
    <App9 />
  </StrictMode>,
)
