import { SET_INSTRUMENTS } from "./types"

export default (state, action) => {
  switch (action.type) {
    case SET_INSTRUMENTS:
      return {
        ...state,
        instruments: action.payload,
      }
    default:
      return state
  }
}
