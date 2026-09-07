import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' 삭제
import App from './App.tsx'
import { App2 } from './App.tsx'
import { App3 } from './App.tsx'
import { App4 } from './App.tsx'
import { App5 } from './App.tsx'
import './index.css'; // tailwindcss 가 적용된 index.css 를 다시 추가함


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <App2 />
    <App3 />
    <App4 />
    <App5 />
  </StrictMode>,
)
