import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayOut/MainLayOut';
import RegisterPage from './Register/RegisterPage';
import Home from './Home/Home';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path: "/",
    element: <Home></Home>
      },
      {
        path: "/register",
    element: <RegisterPage></RegisterPage>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
