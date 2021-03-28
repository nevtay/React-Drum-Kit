import React, { useEffect } from "react"
import Key from "./Key"

const Keys = ({ instruments, setKeys }) => {
  const validKeys = instruments.map((instrument) => instrument.keyboardPosition)
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

  const handlePlayedKey = (e) => {
    let targetElement
    if (validKeys.includes(e.key)) {
      targetElement = document.querySelector(`#${e.key}`)
      targetElement.style.background = "black"
    } else {
      return
    }
    setTimeout(() => {
      targetElement.style.background = "none"
    }, 1000)
    return
  }

  /**
   * @description sets "keydown" event listener if instruments have been loaded from server
   */
  useEffect(() => {
    if (!instruments.length) {
      return null
    }
    window.addEventListener("keydown", (e) => {
      playInstrument(e)
      handlePlayedKey(e)
    })
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
