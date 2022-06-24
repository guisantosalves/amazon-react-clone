import React from "react";
import "./css/CheckOutProduct.css";
import { Star } from "@mui/icons-material";

//using the data layer
import { useStateValue } from "./StateProvide";

function CheckOutProduct({ id, title, price, rating, image }) {

    const [{basket}, dispatch] = useStateValue();

    function RemoveFromBasket(){

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })

    }


  return (
    <div className="checkoutProduct">
      <img className="checkout__img" src={image} alt="random" />

      <div className="checkout__productInfo">
        <p className="checkout__title">{title}</p>

        <p className="checkout__productPrice">
          <small>R$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkout__productRating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p>
                <Star className="product__star" />
              </p>
            ))}
        </div>

        <button onClick={RemoveFromBasket}>Remove</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
