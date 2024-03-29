import React from "react";
import "./css/CartIcon.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";

const CartIcons = ({ id }) => {
  const dispatch = useDispatch();

  /** Functions created in actions.js */
  const add = () => {
    dispatch(addToCart(id));
  };
  const remove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="d-flex justify-content-between">
      <i
        onClick={add}
        className="CartIcon fas fa-cart-plus fa-2x text-success"
      />
      <i
        onClick={remove}
        className="CartIcon fas fa-cart-arrow-down fa-2x text-danger"
      />
    </div>
  );
};

export default CartIcons;
