import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' 삭제
import App from './App.tsx'
import './index.css'; // tailwindcss 가 적용된 index.css 를 다시 추가함

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
