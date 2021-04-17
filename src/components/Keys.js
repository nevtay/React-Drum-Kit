import React, { useEffect, useContext } from "react"
import Key from "./Key"
import InstrumentsContext from "../context/instruments/instrumentsContext"
import KeyHistoryState from "../context/keyHistory/KeyHistoryState"

const Keys = ({ setKeys }) => {
  const instrumentsContext = useContext(InstrumentsContext)
  const { fetchInstruments, instruments } = instrumentsContext

  /**
   * @description fetches instrument metadata
   */
  useEffect(() => {
    try {
      fetchInstruments()
    } catch (err) {
      throw new Error(err)
    }
  }, [])

  return instruments.map((instrument) => {
    return (
      <KeyHistoryState key={instrument.id}>
        <div>
          <Key instrument={instrument} setKeys={setKeys} />
        </div>
      </KeyHistoryState>
    )
  })
}

export default Keys
