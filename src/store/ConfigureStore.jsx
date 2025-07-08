import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './ProductsData';
import cartReducer from './CartSlice';

export const Store = configureStore({
  reducer: {
    prodsData: ProductReducer,
    cart: cartReducer,
  },
});
