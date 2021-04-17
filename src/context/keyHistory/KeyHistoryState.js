import React, { useReducer } from "react"
import KeyHistoryContext from "./keyHistoryContext"
import keyHistoryReducer from "./keyHistoryReducer"
import { SET_KEYS } from "./types"

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

  return (
    <KeyHistoryContext.Provider
      value={{
        keyHistory: state.keyHistory,
        updateKeyHistory,
      }}
    >
      {props.children}
    </KeyHistoryContext.Provider>
  )
}

export default KeyHistoryState
