import { publicReqest, userRequest } from "../../requestMethods";
import {
  createProductFailure,
  createProductStart,
  createProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productSlice";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicReqest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const createProduct = async (dispatch, product) => {
  dispatch(createProductStart());

  try {
    const res = await userRequest.post("/products", product);
    dispatch(createProductSuccess(res.data));
  } catch (error) {
    dispatch(createProductFailure());
  }
};

export const updateProduct = async (dispatch, product) => {
  dispatch(updateProductStart());

  try {
    const res = await userRequest.put(`/products/${product.id}`, product);
    dispatch(updateProductSuccess(res.data));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};

export const deleteProduct = async (dispatch, product) => {
  dispatch(deleteProductStart());

  try {
    const res = await userRequest.delete(`/products/${product.id}`, product);
    dispatch(deleteProductSuccess(res.data));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};

export const getProducts = async (dispatch, product) => {
  dispatch(getProductsStart());

  try {
    const res = await userRequest.get("/products", product);
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
};
