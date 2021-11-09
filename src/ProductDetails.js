import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcons from "./CartIcons";
import "./ProductDetails.css";

const ProductDetails = () => {
  /** Retrieve ID from url */
  const { id } = useParams();
  /** Retrieve Product Details from store */
  const { image_url, description, price, name } = useSelector((state) => ({
    ...state.products[id],
  }));

  return (
    <div className="row justify-content-center">
      <div className="ProductBody col-md-4">
        <img className="ProductDetails-img " src={image_url} alt={name} />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5>{name}</h5>
            <p>${price}</p>
          </div>

          <p className="text-center">{description}</p>
          <CartIcons id={id} />
        </div>
        <Link to="/" className="btn btn-block btn-success mb-3">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
