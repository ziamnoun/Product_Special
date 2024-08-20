import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayOut/MainLayOut';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path: "/",
    element: <Home></Home>;
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
