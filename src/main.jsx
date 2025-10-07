import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home"
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/CartSlice.js';
import { Provider } from 'react-redux';


const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <Home />
    </Provider>
  </StrictMode>,
)
