import React, { useEffect, useContext } from "react"
import Key from "./Key"
import InstrumentsContext from "../context/instruments/instrumentsContext"

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
      <div key={instrument.id}>
        <Key instrument={instrument} setKeys={setKeys} />
      </div>
    )
  })
}

export default Keys
