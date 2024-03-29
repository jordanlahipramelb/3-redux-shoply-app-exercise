import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import CartIcons from "./CartIcons";

const Cart = () => {
  /** Retrieve from store in rootReducer */
  const { cartItems, cartValue, products } = useSelector((state) => state);

  /** //* Map through items in cart in order to display them
   * cartItems is object with keys
   *    Object.keys(cartItems)
   */
  const renderTable = () => {
    const itemRows = Object.keys(cartItems).map((id) => (
      <tr key={id}>
        <td className="text-center align-middle">
          <Link to={`/products/${id}`}>{products[id].name}</Link>
        </td>
        <td className="text-center align-middle">${products[id].price}</td>
        <td className="text-center align-middle">{cartItems[id]}</td>
        <td>
          <CartIcons id={id} />
        </td>
      </tr>
    ));

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{itemRows}</tbody>
      </table>
    );
  };

  return cartItems.length === 0 ? (
    <h2>No items in cart yet!</h2>
  ) : (
    <div>
      {renderTable()}
      <p>Total: ${cartValue}</p>
      <Link to="/" className="btn btn-block btn-success mb-3">
        Home
      </Link>
    </div>
  );
};

export default Cart;
