import { SET_INSTRUMENTS } from "./types"

const instrumentsReducer = (state, action) => {
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

export default instrumentsReducer
