import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Route from './routes/app.routes.jsx'


createRoot(document.getElementById('root')).render(
  <RouterProvider router={Route}>
    <App />
  </RouterProvider>,
)
