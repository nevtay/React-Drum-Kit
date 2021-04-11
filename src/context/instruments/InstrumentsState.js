import React, { useReducer } from "react"
import InstrumentsContext from "./instrumentsContext"
import InstrumentsReducer from "./instrumentsReducer"
import { SET_INSTRUMENTS } from "./types"

const InstrumentsState = (props) => {
  const initialState = {
    instruments: [],
  }

  const [state, dispatch] = useReducer(InstrumentsReducer, initialState)

  const getInstruments = async () => {
    const res = await fetch("./db.json")
    const data = await res.json()
    return data
  }

  const fetchInstruments = () => {
    getInstruments().then((data) => {
      dispatch({
        type: SET_INSTRUMENTS,
        payload: data,
      })
    })
  }

  return (
    <InstrumentsContext.Provider
      value={{
        instruments: state.instruments,
        getInstruments,
        fetchInstruments,
      }}
    >
      {props.children}
    </InstrumentsContext.Provider>
  )
}

export default InstrumentsState
