import React, { useEffect } from "react"
import Key from "./Key"

const Keys = ({ instruments, setKeys }) => {
  /**
   * @description finds and plays audio file, and updates list of keys pressed
   */
  const playInstrument = (e) =>
    instruments.map((item) => {
      if (item.keyboardPosition === e.key) {
        setKeys((prev) => [item.keyboardPosition, ...prev])
        const audioFile = new Audio(item.file)
        audioFile.play()
      }
      return null
    })

  /**
   * @description sets "keydown" event listener if instruments have been loaded from server
   */
  useEffect(() => {
    if (!instruments.length) {
      return null
    }
    window.addEventListener("keydown", (e) => playInstrument(e))
    return () => window.removeEventListener("keydown", (e) => playInstrument(e))
  }, [instruments])

  return instruments.map((instrument) => {
    return (
      <div key={instrument.id}>
        <Key instrument={instrument} />
      </div>
    )
  })
}

export default Keys
