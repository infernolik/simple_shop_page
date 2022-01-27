import React, { useContext, useEffect, useRef } from "react";
import cartContext from "../context/addBtn/cartContext.js";
import CartItem from "./CartItem.js";

export default function Cart() {
  const cart = useContext(cartContext);
  const { cartOpen, holdedItems } = cart;

  // Adds scroller to the cart if needed. Several items might exceed the cart height value.
  const divLowPart = useRef(null); // ref to .lowerPart
  const contentContainer = useRef(null); // ref to container inside .lowerPart

  useEffect(() => {
    const el = window.getComputedStyle(divLowPart.current);
    const paddTop = parseInt(el.getPropertyValue("padding-top"));

    const elOffsetHeight = divLowPart.current.offsetHeight;
    const containerOffsetHeight = contentContainer.current.offsetHeight;
    if (
      containerOffsetHeight + paddTop > elOffsetHeight &&
      elOffsetHeight !== 0
    ) {
      divLowPart.current.style.overflow = "scroll";
      divLowPart.current.style.overflowX = "hidden";
    } else {
      divLowPart.current.style.overflow = "hidden";
    }
  });

  return (
    <div className="cartBox" style={cartOpen ? null : styles}>
      <div className="upperPart">
        <p className="cartName">Cart</p>
      </div>
      <div ref={divLowPart} className="lowerPart">
        <div ref={contentContainer}>
          <div className="bucket">
            {holdedItems.length !== 0 ? (
              holdedItems.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })
            ) : (
              <h4 className="empty-warning">Your cart is empty!</h4>
            )}
          </div>
          {holdedItems.length !== 0 ? (
            <a href="#!" className="checkout bold">
              Checkout
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const styles = {
  display: "none",
};
