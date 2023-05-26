import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterPomodoro from './router/RouterPomodoro';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterPomodoro />,
    errorElement: <div>Error 404</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
