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


const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

const router = createBrowserRouter([

  {
    path: "/",
    Component: Home
  },
  {
    path: "/cart",
    Component: Cart
  },
  {
    path: "/details",
    Component: Details
  },
  {
    path: "/checkout",
    Component: Checkout
  },
  {
    path: "/confirm",
    Component: Confirm
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
