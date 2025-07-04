import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { createBrowserRouter, RouterProvider } from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={
      createBrowserRouter([
        {
          path: '/',
          element: <App />,
        },
      ])
    } />
  </StrictMode>,
)
