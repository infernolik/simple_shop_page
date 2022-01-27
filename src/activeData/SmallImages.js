import React, { Fragment, useContext } from "react";
import itemContext from "../context/image/itemContext.js";

export default function SmallImages({ img, imgId }) {
  const itmContext = useContext(itemContext);

  const { setCurrentLightboxImg, setCurrentImg, currentLighted } = itmContext;

  const handleClick = () => {
    setCurrentImg(imgId);
    setCurrentLightboxImg(imgId);
  };
  return (
    <Fragment>
      <div className="small-image">
        {/* eslint-disable-next-line */}
        <img
          src={img}
          alt="sub-image"
          onClick={handleClick}
          style={currentLighted === imgId ? imgLight : null}
        />
      </div>
    </Fragment>
  );
}

const imgLight = {
  border: "2px solid hsl(26, 100%, 55%)",
  opacity: "0.7",
};
