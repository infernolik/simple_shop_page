import React, { Fragment, useContext } from "react";
import lightboxContext from "../context/lightbox/lightboxContext.js";
import Lightbox from "./Lightbox.js";

export default function LightWrapper() {
  const lightContext = useContext(lightboxContext);
  const { lightSwitcher } = lightContext;
  return <Fragment>{lightSwitcher ? <Lightbox /> : null}</Fragment>;
}
