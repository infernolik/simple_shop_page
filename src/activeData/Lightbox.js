import React, { useContext, useEffect } from "react";
import SmallLightboxImages from "./SmallLightboxImages.js";
import itemContext from "../context/image/itemContext.js";
import lightboxContext from "../context/lightbox/lightboxContext.js";
import closeBtn from "../images/icon-close.svg";
import arrowRight from "../images/icon-next.svg";
import arrowLeft from "../images/icon-previous.svg";

export default function Lightbox() {
  const itmContext = useContext(itemContext);
  const lightContext = useContext(lightboxContext);

  const { lightSwitcher, closeLightbox } = lightContext;
  const {
    images,
    currentLightboxImg,
    currentLightedInBox,
    clickLeft,
    clickRight,
    setCurrentLightboxImg,
  } = itmContext;

  const handleClick = (ev) => {
    if (ev.target.className === "lightbox") {
      window.document.body.style.position = "static";

      window.document.body.style.overflow = "auto";

      closeLightbox();
      itmContext.setCurrentImg(currentLightedInBox);
    }
    if (ev.target.className === "closeLightbox") {
      window.document.body.style.position = "static";

      window.document.body.style.overflow = "auto";
      closeLightbox();
      itmContext.setCurrentImg(currentLightedInBox);
    }
  };
  // handle arrows
  const handleLeft = () => {
    clickLeft();
  };
  const handleRight = () => {
    clickRight();
  };

  useEffect(() => {
    setCurrentLightboxImg(currentLightedInBox);
    // eslint-disable-next-line
  }, [currentLightedInBox, lightSwitcher]);
  return (
    <div
      className="lightbox"
      style={
        lightSwitcher
          ? {
              display: "flex",
              zIndex: 10,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }
          : null
      }
      onClick={handleClick}
    >
      <div className="lightbox-flex">
        <img
          src={closeBtn}
          className="closeLightbox"
          onClick={handleClick}
          alt="close_button"
        ></img>
        <div className="lightbox-big-image">
          <div className="arrow-wrapper-right" onClick={handleRight}></div>
          <img src={arrowRight} className="arrowRight" alt="arrow_right" />
          <span></span>

          <div className="arrow-wrapper-left" onClick={handleLeft}></div>
          <img src={arrowLeft} className="arrowLeft" alt="arrow_left" />
          <span></span>

          {/* eslint-disable-next-line */}
          <img src={currentLightboxImg} alt="main-image" />
        </div>
        <div className="lightbox-flex-small-image">
          {images.map((img, index) => {
            return <SmallLightboxImages key={index} img={img} imgId={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
