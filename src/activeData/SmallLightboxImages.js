import React, { Fragment, useContext } from "react";
import itemContext from "../context/image/itemContext.js";

export default function SmallLightboxImages({ img, imgId }) {
  const itmContext = useContext(itemContext);

  const { setCurrentLightboxImg, currentLightedInBox } = itmContext;

  const handleClick = () => {
    setCurrentLightboxImg(imgId);
  };
  return (
    <Fragment>
      <div className="small-image">
        <span className="backing"></span>
        {/* eslint-disable-next-line */}
        <img
          src={img}
          alt="sub-image"
          onClick={handleClick}
          style={currentLightedInBox === imgId ? imgLight : null}
        />
      </div>
    </Fragment>
  );
}

const imgLight = {
  border: "2px solid hsl(26, 100%, 55%)",
  opacity: "0.7",
};
