import React, { useReducer } from "react"
import KeyHistoryContext from "./keyHistoryContext"
import keyHistoryReducer from "./keyHistoryReducer"
import { SET_KEYS, CLEAR_KEYS } from "./types"

const KeyHistoryState = (props) => {
  const initialState = {
    keyHistory: [],
  }

  const [state, dispatch] = useReducer(keyHistoryReducer, initialState)

  const updateKeyHistory = (keyPressed) => {
    dispatch({
      type: SET_KEYS,
      payload: keyPressed,
    })
  }

  const clearKeyHistory = () => {
    dispatch({
      type: CLEAR_KEYS,
    })
  }

  return (
    <KeyHistoryContext.Provider
      value={{
        keyHistory: state.keyHistory,
        updateKeyHistory,
        clearKeyHistory,
      }}
    >
      {props.children}
    </KeyHistoryContext.Provider>
  )
}

export default KeyHistoryState
