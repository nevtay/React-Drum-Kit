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

  // const fetchClap = async () => {
  //   console.log(drumKit)
  // }
  return (
    <div>
      <h1>React Drum Kit</h1>
      <button
        onClick={() => {
          fetchClap()
        }}
      >
        Clap
      </button>
    </div>
  )
}

export default App
