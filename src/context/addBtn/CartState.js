import React, { useReducer, useContext } from "react";
import itemContext from "../image/itemContext.js";
import cartContext from "./cartContext.js";
import cartReducer from "./cartReducer.js";
import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SWITCH_CART,
  CHANGE_IN_CART_COUNT,
  REMOVE_ITEM,
} from "../types.js";

export default function CartState(props) {
  const initialState = {
    itemsInCart: 0,
    holdedItems: [],
    currentCount: 1,
    cartOpen: false,
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const itmContext = useContext(itemContext);
  const { id, initialPrice, discount, title } = itmContext;

  const calculateFinalPrice = () => {
    return (initialPrice * (1 - discount / 100) * state.currentCount).toFixed(
      2
    );
  };

  // Change itemInCart count
  const changeInCart = (amount) => {
    dispatch({ type: CHANGE_IN_CART_COUNT, payload: amount });
  };

  // Add to cart
  const addToCart = () => {
    // Check if user adds the same item
    let same = false;

    if (state.holdedItems.length !== 0) {
      for (let i = 0; i < state.holdedItems.length; i++) {
        if (state.holdedItems[i].id === id) {
          state.holdedItems[i].amount += state.currentCount;
          state.holdedItems[i].finalPrice = (
            +state.holdedItems[i].finalPrice + +calculateFinalPrice()
          ).toFixed(2);
          same = true;
          break;
        }
      }
    }

    if (!same) {
      const newItem = {
        id: id,
        price: initialPrice,
        // image: images.length !== 0 ? images[0] : null,
        finalPrice: calculateFinalPrice(),
        title: title,
        amount: state.currentCount,
      };
      dispatch({ type: ADD_TO_CART, payload: newItem });
    }

    changeInCart(state.currentCount);
  };
  const removeFromCart = (amount) => {
    dispatch({ type: REMOVE_FROM_CART, payload: amount });
  };
  const increaseCount = () => {
    dispatch({ type: INCREASE_COUNT });
  };
  const decreaseCount = () => {
    if (state.currentCount <= 1) {
      return;
    } else {
      dispatch({ type: DECREASE_COUNT });
    }
  };

  // Open/close cart
  const switchCart = () => {
    dispatch({ type: SWITCH_CART });
  };
  // Remove item from the bucket
  const removeItem = (id, amount) => {
    removeFromCart(amount);
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <cartContext.Provider
      value={{
        holdedItems: state.holdedItems,
        itemsInCart: state.itemsInCart,
        currentCount: state.currentCount,
        cartOpen: state.cartOpen,
        increaseCount,
        decreaseCount,
        switchCart,
        addToCart,
        removeItem,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
