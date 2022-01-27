import React, { useContext } from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cartImg from "../images/icon-cart-white.svg";
import cartContext from "../context/addBtn/cartContext.js";
import M from "materialize-css/dist/js/materialize.min.js";

export default function AddButton() {
  const cart = useContext(cartContext);
  const { currentCount, increaseCount, decreaseCount, addToCart } = cart;

  const handleClick = () => {
    addToCart();
    M.toast({ html: `Item added!`, classes: "rounded" });
  };

  return (
    <div className="buttons">
      <div className="change-value">
        <img
          src={minus}
          className="minus"
          alt="minus"
          onClick={decreaseCount}
        />
        <span className="count">{currentCount}</span>
        <img src={plus} className="plus" alt="plus" onClick={increaseCount} />
      </div>
      <div className="addBtn" onClick={handleClick}>
        <a href="#!">
          <img src={cartImg} alt="cart" /> Add to cart
        </a>
      </div>
    </div>
  );
}
