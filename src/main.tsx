import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/Home/HomePage.tsx'
import AgendamentosPage from './pages/Agendamentos/AgendamentosPage.tsx'
import SobrePage from './pages/Sobre/SobrePage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/agendamentos', element: <AgendamentosPage /> },
      { path: '/sobre', element: <SobrePage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
