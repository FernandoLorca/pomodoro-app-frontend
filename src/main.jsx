import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterPomodoro from './router/RouterPomodoro';
import RouterShortBreak from './router/RouterShortBreak';
import RouterLongBreak from './router/RouterLongBreak';

const router = createBrowserRouter([
  {
    path: '*',
    element: <div>Not Found</div>,
  },
  {
    path: '/',
    element: <RouterPomodoro />,
  },
  {
    path: '/short-break',
    element: <RouterShortBreak />,
  },
  {
    path: '/long-break',
    element: <RouterLongBreak />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
