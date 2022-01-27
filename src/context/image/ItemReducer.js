import {
  LOAD_ITEM,
  SET_CURRENT_IMAGE,
  SET_CURRENT_LIGHTBOX_IMAGE,
  SET_DISCOUNT_PRICE,
  CLICK_LEFT,
  CLICK_RIGHT,
} from "../types.js";

export default function itemReducer(state, action) {
  switch (action.type) {
    case LOAD_ITEM:
      return;

    case SET_DISCOUNT_PRICE:
      return {
        ...state,
        item: {
          ...state.item,
          discountedPrice: action.payload,
        },
      };
    case SET_CURRENT_IMAGE:
      return {
        ...state,
        item: {
          ...state.item,
          currentImg: state.item.images[action.payload],
          currentLighted: action.payload,
          // lighted: true,
        },
      };

    case SET_CURRENT_LIGHTBOX_IMAGE:
      return {
        ...state,
        currentLightboxImg: state.item.images[action.payload],
        currentLightedInBox: action.payload,
      };
    // handle arrows
    case CLICK_LEFT:
      if (state.currentLightedInBox === 0) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          currentLightedInBox: state.currentLightedInBox - 1,
        };
      }

    case CLICK_RIGHT:
      if (state.currentLightedInBox >= state.item.images.length - 1) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          currentLightedInBox: state.currentLightedInBox + 1,
        };
      }
    default:
      return state;
  }
}
