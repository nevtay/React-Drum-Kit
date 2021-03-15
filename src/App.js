import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [drumKit, setDrumKit] = useState([])
  const [key, setKey] = useState([])

  /**
   * @description fetches instruments from server
   */
  const fetchDrumKit = async () => {
    const x = await fetch("./instruments")
    const y = await x.json()
    setDrumKit([...y])
  }

  /**
   * @description finds and plays audio file
   */
  const playInstrument = (e) =>
    drumKit.map((item) => {
      if (item.keyboardPosition === e.key) {
        setKey((prev) => [item.keyboardPosition, ...prev])
        const audioFile = new Audio(item.file)
        audioFile.play()
      }
      return null
    })

  /**
   * @description fetches instrument metadata
   */
  useEffect(() => {
    try {
      fetchDrumKit()
    } catch (err) {
      throw new Error(err)
    }
  }, [])

  /**
   * @description sets event listener if drum kit has been loaded from server
   */
  useEffect(() => {
    if (!drumKit.length) {
      return null
    }
    window.addEventListener("keydown", (e) => playInstrument(e))
    return () => window.removeEventListener("keydown", (e) => playInstrument(e))
  }, [drumKit])

  /**
   *
   * @description renders drum kit items
   */
  const RenderDrumKit = () =>
    drumKit.map((item) => {
      return (
        <div key={item.id}>
          <p>{item.name}</p> <p>{item.keyboardPosition}</p>
        </div>
      )
    })

  const RenderKeys = () => {
    if (key.length > 10) {
      const previousTenKeys = key.filter((k, i) => i < 10)
      setKey(previousTenKeys)
    }
    return <p>{key.join(" ")}</p>
  }

  return (
    <div>
      <h1>React Drum Kit</h1>
      {RenderDrumKit()}
      <h2>Last Five Keys</h2>
      {key.length > 0 && RenderKeys()}
      {key.length === 0 && <p>Play something!</p>}
    </div>
  )
}

export default App
