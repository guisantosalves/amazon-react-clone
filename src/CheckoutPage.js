import React from "react";
import Header from "./components/Header";
import "./CheckoutPage.css";
import CheckOutProduct from "./components/CheckOutProduct";

//using the data layer
import { useStateValue } from "./components/StateProvide";

function CheckoutPage() {
  const [{ basket }, dispatch] = useStateValue();

  console.log();
  return (
    <>
      <div className="checkout">
        <Header />
        <img
          className="checkout__ad"
          src="https://media.graphassets.com/6xhJGUQTunIlI4LBgRAw"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
            <p>
              You have no items in your basket. to buy one more item "Add to
              item" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>

            {/* list the project from data layer */}
            {basket.map((item, index) => (
              <CheckOutProduct
                id={item.id}
                title={item.tittle}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CheckoutPage;
