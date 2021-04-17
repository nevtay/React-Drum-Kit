import { SET_KEYS } from "./types"

const keyHistoryReducer = (state, action) => {
  switch (action.type) {
    case SET_KEYS:
      return {
        ...state,
        keyHistory: [action.payload, ...state.keyHistory.filter((_, idx) => idx < 9)],
      }
    default:
      return state
  }
}

export default keyHistoryReducer
