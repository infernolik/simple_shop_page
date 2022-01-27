import React, { useContext, useEffect } from "react";
import AddButton from "../activeData/AddButton.js";
import itemContext from "../context/image/itemContext.js";

export default function Description() {
  const itmContext = useContext(itemContext);
  const {
    initialPrice,
    discount,
    description,
    title,
    discountedPrice,
    withDiscount,
  } = itmContext;
  useEffect(() => {
    withDiscount();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="description">
      <p className="companyName">SNEAKER COMPANY</p>
      <h1 className="title">{title}</h1>
      <p className="description-text">{description}</p>
      <div className="price">
        <div className="firstLine">
          <span className="realPrice">{discountedPrice}</span>{" "}
          <span className="discount">{`${discount}%`}</span>
        </div>
        <div className="secondLine">
          <span className="initPrice">{`$${initialPrice.toFixed(2)}`}</span>
        </div>
      </div>
      <AddButton />
    </div>
  );
}
