import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [drumKit, setDrumKit] = useState([])

  // retrieve all instruments from json server when page loads
  useEffect(() => {
    const fetchDrumKitItems = async () => {
      const res = await fetch("./instruments")
      const data = await res.json()
      setDrumKit(data)
    }
    fetchDrumKitItems()
  }, [])

  const RenderDrumKit = () => drumKit.map((item) => <div key={item.id}>{item.name}</div>)

  return (
    <div>
      <h1>React Drum Kit</h1>
      {RenderDrumKit()}
    </div>
  )
}

export default App
