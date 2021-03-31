import React, { useState, useEffect } from "react"
import "./styles/main.css"
import Keys from "./components/Keys"
import KeyHistory from "./components/KeyHistory"

function App() {
  const [instruments, setinstruments] = useState([])
  const [keys, setKeys] = useState([])

  /**
   * @description fetches instruments from server
   */
  const fetchinstruments = async () => {
    const res = await fetch("./db.json")
    const data = await res.json()
    setinstruments([...data])
  }

  /**
   * @description fetches instrument metadata
   */
  useEffect(() => {
    try {
      fetchinstruments()
    } catch (err) {
      throw new Error(err)
    }
  }, [])

  return (
    <div className="container">
      <h1 className="title">Drum Kit</h1>
      <div className="instrument-group">
        <Keys instruments={instruments} setKeys={setKeys} />
      </div>
      <KeyHistory keys={keys} />
    </div>
  )
}

export default App
