import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./css/ProductList.css";
import CartIcons from "./CartIcons";

const ProductList = () => {
  //** Select products from store */
  const products = useSelector((state) => state.products);

  /** //* Map through products in order to display them
   * JSON file is object named products consisting of keys.
   *    Object.keys(products)
   */
  const productCards = Object.keys(products).map((id) => (
    <div class="col-md-6 col-lg-4 col-xl-3 mb-2" key={id}>
      <div className="ProductCard card text-center">
        <div className="card-body">
          <Link to={`/products/${id}`}>
            <h3 className="card-title">{products[id].name}</h3>
            <img src={products[id].image_url} alt={products[id].name} />
          </Link>
          <CartIcons id={id} />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="ProductList container">
      <h3 className="text-center">Our Products</h3>
      <div className="row">{productCards}</div>
    </div>
  );
};

export default ProductList;
