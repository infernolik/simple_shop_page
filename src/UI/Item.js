import React, { useContext } from "react";
import Gallery from "./Gallery.js";
import Description from "./Description.js";
import Carousel from "./Carousel.js";
import hamburgerContext from "../context/windowRezAndHamburger/hamburgerContext.js";

export default function Item() {
  const rezContext = useContext(hamburgerContext);
  const { media } = rezContext;

  return (
    <div
      className={
        media || window.matchMedia("(max-width: 768px)").matches
          ? "carousel-container"
          : "grid-item"
      }
    >
      {media || window.matchMedia("(max-width: 768px)").matches ? (
        <Carousel />
      ) : (
        <Gallery />
      )}
      <Description />
    </div>
  );
}
