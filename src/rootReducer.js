import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import data from "./data.json";

const DEFAULT_STATE = {
  products: data.products,
  cartItems: {},
};
