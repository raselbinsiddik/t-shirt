import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import OrderReview from './components/OrderReview/OrderReview';
import Grandpa from './components/Grandpa/Grandpa';
import Father from './components/Father/Father';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('t-shirts.json')
      },
      {
        path: 'review',
        element:<OrderReview></OrderReview>
      },
      {
        path: 'garndpa',
        element:<Grandpa></Grandpa>
      },
      {
        path: 'father',
        element:<Father></Father>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
