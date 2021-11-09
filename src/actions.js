import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

/** Action Creators
- Abstract the functions that create actions to their own file
- A function that creates an action is called an action creator

- These functions perform actions that add an item to a cart and removes an item from the cart.
*/

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id,
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
}
