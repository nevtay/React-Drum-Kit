import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [drumKit, setDrumKit] = useState([])

  /**
   * @description fetches instruments from server
   */
  useEffect(() => {
    const fetchDrumKitItems = async () => {
      const res = await fetch("./instruments")
      const data = await res.json()
      setDrumKit(data)
    }
    fetchDrumKitItems()
  }, [])

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

  return (
    <div>
      <h1>React Drum Kit</h1>
      {RenderDrumKit()}
    </div>
  )
}

export default App
