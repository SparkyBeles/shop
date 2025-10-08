import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home"
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/CartSlice.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';


const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

const router = createBrowserRouter([

  {
    path: "/",
    Component: Home
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
