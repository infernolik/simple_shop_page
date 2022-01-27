import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SWITCH_CART,
  CHANGE_IN_CART_COUNT,
  REMOVE_ITEM,
} from "../types.js";

export default function btnReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        holdedItems: [action.payload, ...state.holdedItems],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        itemsInCart: state.itemsInCart - action.payload,
      };

    case REMOVE_ITEM:
      return {
        ...state,
        holdedItems: state.holdedItems.filter((item) => {
          return item.id !== action.payload;
        }),
      };

    case INCREASE_COUNT:
      return {
        ...state,
        currentCount: state.currentCount + 1,
      };

    case DECREASE_COUNT:
      return {
        ...state,
        currentCount: state.currentCount - 1,
      };

    case CHANGE_IN_CART_COUNT:
      return {
        ...state,
        itemsInCart: state.itemsInCart + action.payload,
      };

    case SWITCH_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    default:
      return state;
  }
}
