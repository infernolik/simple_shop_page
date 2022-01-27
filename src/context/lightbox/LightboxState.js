import React, { useReducer, useContext, useCallback } from "react";
import lightboxContext from "./lightboxContext.js";
import itemContext from "../image/itemContext.js";
import lightboxReducer from "./lightboxReducer.js";
import { TRIGGER_LIGHTBOX, CLOSE_LIGHTBOX } from "../types.js";

export default function LightboxState(props) {
  const initialState = {
    lightSwitcher: false,
  };
  const [state, dispatch] = useReducer(lightboxReducer, initialState);
  // Context to check against for keyDown event
  const itmContext = useContext(itemContext);
  const { clickLeft, clickRight } = itmContext;

  // KeyDown event
  const keyDownEv = useCallback((ev) => {
    if (ev.key === "ArrowRight") {
      clickRight();
    } else if (ev.key === "ArrowLeft") {
      clickLeft();
    } else {
      return;
    }
    // eslint-disable-next-line
  }, []);

  //   Turn on lightbox
  const showLightbox = () => {
    document.body.addEventListener("keydown", keyDownEv);
    dispatch({ type: TRIGGER_LIGHTBOX });
  };
  // Close lightbox
  const closeLightbox = () => {
    document.body.removeEventListener("keydown", keyDownEv);
    dispatch({ type: CLOSE_LIGHTBOX });
  };
  return (
    <lightboxContext.Provider
      value={{
        lightSwitcher: state.lightSwitcher,
        showLightbox,
        closeLightbox,
      }}
    >
      {props.children}
    </lightboxContext.Provider>
  );
}
