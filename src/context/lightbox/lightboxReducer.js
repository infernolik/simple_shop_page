import { TRIGGER_LIGHTBOX, CLOSE_LIGHTBOX } from "../types.js";

export default function lightboxReducer(state, action) {
  switch (action.type) {
    case TRIGGER_LIGHTBOX:
      return {
        ...state,
        lightSwitcher: !state.lightSwitcher,
      };

    case CLOSE_LIGHTBOX:
      return {
        ...state,
        lightSwitcher: false,
      };

    default:
      return state;
  }
}
