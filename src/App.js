import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [drumKit, setDrumKit] = useState([])
  const fetchClap = async () => {
    const res = await fetch("./instruments")
    const data = await res.json()
    console.log(data)
    const audio2 = await new Audio(data[0].file)
    audio2.play()
  }
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
