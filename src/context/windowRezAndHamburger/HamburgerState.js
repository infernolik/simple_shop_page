import React, { useReducer } from "react";
import hamburgerContext from "./hamburgerContext.js";
import hamburgerReducer from "./hamburgerReducer.js";
import { SWITCH_HAM, SWITCH_MEDIA } from "../types.js";

export default function HamburgerState(props) {
  const initialState = {
    hamOpened: false,
    media: false,
  };
  const [state, dispatch] = useReducer(hamburgerReducer, initialState);

  const switchHam = () => {
    dispatch({ type: SWITCH_HAM });
  };
  const switchRez = (rez) => {
    dispatch({ type: SWITCH_MEDIA, payload: rez });
  };
  return (
    <hamburgerContext.Provider
      value={{
        hamOpened: state.hamOpened,
        media: state.media,
        switchHam,
        switchRez,
      }}
    >
      {props.children}
    </hamburgerContext.Provider>
  );
}
