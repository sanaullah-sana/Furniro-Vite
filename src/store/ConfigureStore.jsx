import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './ProductsData';

export const Store = configureStore({
    reducer:{
        prodsData: ProductReducer,
    }
});