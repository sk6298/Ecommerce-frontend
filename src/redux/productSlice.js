/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    createProductStart: (state, action) => {
      state.isFetching = true;
    },
    createProductSuccess: (state, action) => {
      state.products.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    createProductFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },

    updateProductStart: (state, action) => {
      state.isFetching = true;
    },
    updateProductSuccess: (state, action) => {
      const index = state.products.findIndex(product => product._id == action.payload._id);
      if (index != -1) {
        state.products[index] = action.payload;
      }
        state.isFetching = false;
        state.error = false;
    },
    updateProductFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },

    deleteProductStart: (state, action) => {
      state.isFetching = true;
    },
    deleteProductSuccess: (state, action) => {
      const index = state.products.findIndex(product => product._id == action.payload._id);
      if (index != -1) {
        state.products.splice(index,1);
      }
      state.isFetching = false;
      state.error = false;
    },
    deleteProductFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },

    getProductsStart: (state, action) => {
      state.isFetching = true;
    },
    getProductsSuccess: (state, action) => {
      state.products = [...state.products, ...action.payload];
      state.isFetching = false;
      state.error = false;
    },
    getProductsFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  createProductFailure,
  createProductStart,
  createProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} = productSlice.actions;
export default productSlice.reducer;
