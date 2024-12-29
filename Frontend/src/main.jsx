import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import UserContext from '../src/context/userContext.jsx'
import { CaptainContext } from './context/CaptainContext.jsx'
CaptainContext

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserContext>
    <CaptainContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CaptainContext>
   </UserContext>
  </StrictMode>,
)
