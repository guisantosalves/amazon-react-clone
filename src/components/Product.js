import React from "react";
import "./css/Product.css";
import { Star } from "@mui/icons-material";

function Product({ id, tittle, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{tittle}</p>
        <p className="product__price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>

        {/* creating an array, filling it but with null values and maping it */}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p>
                <Star className="product__star" />
              </p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
