import { SET_KEYS } from "./types"

const keyHistoryReducer = (state, action) => {
  switch (action.type) {
    case SET_KEYS:
      return {
        ...state,
        keyHistory: [action.payload, ...state.keyHistory],
      }
    default:
      return state
  }
}

export default keyHistoryReducer
