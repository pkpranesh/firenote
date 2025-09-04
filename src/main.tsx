import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import  { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster toastOptions={{
          success: {
            style: {
              background: 'orange',
            },iconTheme: {
              primary: 'black', // Color of the tick mark
              secondary: 'white', // Color of the background behind the tick
            }
          },error: {
            style: {
              background: 'rgb(218, 88, 18)',
              color:'black'
            },iconTheme: {
              primary: 'black', // Color of the tick mark
              secondary: 'white', // Color of the background behind the tick
            }
          } }}/>
  </StrictMode>,
)
