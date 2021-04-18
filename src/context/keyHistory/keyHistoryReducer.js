import { SET_KEYS, CLEAR_KEYS } from "./types"

const keyHistoryReducer = (state, action) => {
  switch (action.type) {
    case SET_KEYS:
      return {
        ...state,
        keyHistory: [action.payload, ...state.keyHistory.filter((_, idx) => idx < 9)],
      }
    case CLEAR_KEYS:
      return {
        ...state,
        keyHistory: [],
      }
    default:
      return state
  }
}

export default keyHistoryReducer
