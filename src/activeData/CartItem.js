import React, { useContext } from "react";
import cartContext from "../context/addBtn/cartContext.js";
import itemContext from "../context/image/itemContext.js";
import deleteIcon from "../images/icon-delete.svg";

export default function CartItem({ item: { id, finalPrice, title, amount } }) {
  const itmContext = useContext(itemContext);
  const cart = useContext(cartContext);
  const { images, discountedPrice } = itmContext;
  const { removeItem } = cart;

  const handleDelete = () => {
    removeItem(id, amount);
  };
  return (
    <div className="summary">
      <img src={images[0]} className="thumbnail" alt="item_thumbnail" />
      <div className="desc">
        <p className="cart-title">{title}</p>
        <p className="cart-price">
          ${`${discountedPrice} x ${amount}`}{" "}
          <span className="bold">${finalPrice}</span>
        </p>
      </div>
      <img
        src={deleteIcon}
        alt="delete icon"
        className="deleteIcon"
        onClick={handleDelete}
      />
    </div>
  );
}
