import React, { useState, useEffect } from "react"
import "./styles/main.css"
import Keys from "./components/Keys"
import KeyHistory from "./components/KeyHistory"

function App() {
  const [keys, setKeys] = useState([])

  /**
   * @description updates a css variable based on the innerHeight of the global window object
   */
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    window.addEventListener("resize", () => {
      vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    })
  }, [])

  return (
    <div className="container">
      <h1 className="title">Drum Kit</h1>
      <div className="instrument-group">
        <Keys setKeys={setKeys} />
      </div>
      <KeyHistory keys={keys} />
      <footer>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">
          Icongeek26
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </footer>
    </div>
  )
}

export default App
