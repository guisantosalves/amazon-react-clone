import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./components/StateProvide";

//using reducer
export const inititalState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => 
{
  console.log(action)
  switch(action.type){

    case "ADD_TO_BASKET":

        
      return {
        ...state,
        //we need keep the state from basket then add the new item
        basket: [...state.basket, action.item],
      }

      break;

    case "REMOVE_FROM_BASKET":

      let newBasket = [...state.basket]
      //it's gonna return something >= 0 if find
      const index = state.basket.findIndex((basketItems)=>basketItems.id === action.id);

      if(index >= 0){
        //get the index where is the product and remove it
        newBasket.splice(index, 1);

      }else{
        console.warn(`can't remove product (id: ${action.id})`)
      }

      return{
        ...state
      }
      break;

    default:
      return state; 
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider inititalState={inititalState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
