import { SWITCH_HAM, SWITCH_MEDIA } from "../types.js";

export default function hamburgerReducer(state, action) {
  switch (action.type) {
    case SWITCH_HAM:
      return {
        ...state,
        hamOpened: !state.hamOpened,
      };

    case SWITCH_MEDIA:
      return {
        ...state,
        media: action.payload,
      };

    default:
      return state;
  }
}
