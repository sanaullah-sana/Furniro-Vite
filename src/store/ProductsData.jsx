// src/store/ProductsData.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 1. Async thunk to fetch products
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://api.escuelajs.co/api/v1/products");
  return response.data;
});

// 2. Slice with status tracking
const products = createSlice({
  name: "prodsData",
  initialState: {
    data: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // Optional: keep your manual add for testing or local data
    AddData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { AddData } = products.actions; // optional
export default products.reducer;
