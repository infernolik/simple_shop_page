import React, { useContext } from "react";
import SmallImages from "../activeData/SmallImages.js";
import itemContext from "../context/image/itemContext.js";
import lightboxContext from "../context/lightbox/lightboxContext.js";

export default function Gallery() {
  const itmContext = useContext(itemContext);
  const lightContext = useContext(lightboxContext);
  const { images, currentImg } = itmContext;
  const { showLightbox } = lightContext;

  const handleClick = () => {
    window.document.body.style.overflow = "hidden";
    window.document.body.style.position = "relative";
    showLightbox();
  };

  // Styles to dynamically adjust css if image count changes (changes grid template)
  const styles = {
    gridTemplateColumns: `repeat(${
      images.length > 1 ? images.length : 1
    }, 1fr)`,
  };

  const stylesForBigImg = {
    gridColumn: `1 / span ${images.length > 1 ? images.length : 1}`,
  };

  return (
    <div className="grid-gallery" style={styles}>
      <div className="big-image" style={stylesForBigImg} onClick={handleClick}>
        {/* eslint-disable-next-line */}
        <img src={currentImg} alt="main_image" />
      </div>
      {images.map((img, index) => {
        return <SmallImages key={index} img={img} imgId={index} />;
      })}
    </div>
  );
}
