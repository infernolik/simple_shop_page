import React, { useReducer } from "react";
import { v4 } from "uuid";
import itemContext from "./itemContext.js";
import itemReducer from "./ItemReducer.js";
// In Prod items` info being hosted in db and loaded on demand. LOAD_ITEM type serves this purpose
import img1 from "../../images/image-product-1.jpg";
import img2 from "../../images/image-product-2.jpg";
import img3 from "../../images/image-product-3.jpg";
import img4 from "../../images/image-product-4.jpg";
import {
  SET_CURRENT_IMAGE,
  SET_CURRENT_LIGHTBOX_IMAGE,
  SET_DISCOUNT_PRICE,
  CLICK_LEFT,
  CLICK_RIGHT,
} from "../types.js";

export default function ItemState(props) {
  const initialState = {
    item: {
      id: v4(),
      images: [img1, img2, img3, img4],
      currentImg: img1,
      currentLighted: 0, // take out outside
      initialPrice: 200,
      discountedPrice: null,
      discount: 50,
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather will offer",
      title: "Fall Limited Edition Sneakers",
      // lighted: false, // take out outside
    },
    currentLightboxImg: img1,
    currentLightedInBox: 0,
  };
  const [state, dispatch] = useReducer(itemReducer, initialState);

  const withDiscount = () => {
    try {
      if (state.item.discount > 0) {
        const disc = (
          state.item.initialPrice *
          (1 - state.item.discount / 100)
        ).toFixed(2);

        dispatch({ type: SET_DISCOUNT_PRICE, payload: disc });
      } else {
        return state.item.initialPrice;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const setCurrentImg = (imgId) => {
    try {
      dispatch({ type: SET_CURRENT_IMAGE, payload: imgId });
    } catch (error) {
      console.error(error);
    }
  };
  const setCurrentLightboxImg = (imgId) => {
    try {
      dispatch({ type: SET_CURRENT_LIGHTBOX_IMAGE, payload: imgId });
    } catch (error) {
      console.error(error);
    }
  };
  // Handle arrows
  const clickLeft = () => {
    try {
      dispatch({ type: CLICK_LEFT });
    } catch (error) {
      console.error(error);
    }
  };
  const clickRight = () => {
    try {
      dispatch({ type: CLICK_RIGHT });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <itemContext.Provider
      value={{
        id: state.item.id,
        images: state.item.images,
        currentImg: state.item.currentImg,
        currentLightboxImg: state.currentLightboxImg,
        currentLighted: state.item.currentLighted,
        currentLightedInBox: state.currentLightedInBox,
        initialPrice: state.item.initialPrice,
        discount: state.item.discount,
        description: state.item.description,
        title: state.item.title,
        discountedPrice: state.item.discountedPrice,
        // lighted: state.item.lighted,
        withDiscount,
        setCurrentImg,
        setCurrentLightboxImg,
        clickRight,
        clickLeft,
      }}
    >
      {props.children}
    </itemContext.Provider>
  );
}
