import React, { useState, useEffect } from "react"
import "./styles/main.css"
import Keys from "./components/Keys"

function App() {
  const [instruments, setinstruments] = useState([])
  const [key, setKey] = useState([])

  /**
   * @description fetches instruments from server
   */
  const fetchinstruments = async () => {
    const res = await fetch("./instruments")
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

  /**
   * @description finds and plays audio file
   */
  const playInstrument = (e) =>
    instruments.map((item) => {
      if (item.keyboardPosition === e.key) {
        setKey((prev) => [item.keyboardPosition, ...prev])
        const audioFile = new Audio(item.file)
        audioFile.play()
      }
      return null
    })

  /**
   * @description sets event listener if drum kit has been loaded from server
   */
  useEffect(() => {
    if (!instruments.length) {
      return null
    }
    window.addEventListener("keydown", (e) => playInstrument(e))
    return () => window.removeEventListener("keydown", (e) => playInstrument(e))
  }, [instruments])

  /**
   *
   * @description renders drum kit items
   */

  const RenderKeys = () => {
    if (key.length > 10) {
      const previousTenKeys = key.filter((k, i) => i < 10)
      setKey(previousTenKeys)
    }
    return <p>{key.join(" > ")}</p>
  }

  return (
    <div>
      <h1>React Drum Kit</h1>
      <div className="instrument-group">
        <Keys instruments={instruments} />
      </div>
      <h2>Last Ten Keys</h2>
      {key.length > 0 ? RenderKeys() : <p>Play something!</p>}
    </div>
  )
}

export default App
