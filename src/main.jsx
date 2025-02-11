import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ContextProvider from './utils/ContextProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider >
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
