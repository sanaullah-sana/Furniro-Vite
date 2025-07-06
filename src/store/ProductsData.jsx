// src/store/ProductsData.js
import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: 'prods',
  initialState: {
    data: [],
  },
  reducers: {
    AddData: (state, action) => {
      state.data = action.payload; // overwrite array instead of push
    },
  },
});

export const { AddData } = products.actions;
export default products.reducer;
