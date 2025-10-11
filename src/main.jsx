import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home"
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/CartSlice.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Cart from './pages/Cart.jsx';
import Confirm from './pages/Confirm.jsx';
import Checkout from './pages/Checkout.jsx';
import Details from './pages/Details.jsx';
import Layout from './pages/Layout.jsx';
import { Analytics } from "@vercel/analytics/next"


const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

const router = createBrowserRouter([

  {
    element: <Layout />,

    children: [
    {index: true,
    element: <Home />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/details",
    element: <Details />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/confirm",
    element: <Confirm />
  }
]}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <RouterProvider router={router} />
      <Analytics/>
    </Provider>
  </StrictMode>,
)
