import React, { useState, useEffect } from "react"
import Key from "./Key"

const Keys = ({ instruments, setKeys }) => {
  const validKeys = [...instruments].map((instrument) => instrument.keyboardPosition)

  const updateKeysHistory = (e) => {
    instruments.map((item) => {
      if (item.keyboardPosition === e.key) {
        setKeys((prev) => [item.keyboardPosition, ...prev])
      }
      return null
    })
  }

  const handlePlayedKey = (e) => {
    let targetElement
    if (validKeys.includes(e.key)) {
      targetElement = document.querySelector(`#${e.key}`)
      targetElement.classList.add("playing")
      targetElement.addEventListener("animationend", function () {
        targetElement.classList.remove("playing")
      })
      targetElement.removeEventListener("animationend", function () {
        targetElement.classList.remove("playing")
      })
      // }
    }
  }

  /**
   * @description sets "keydown" event listener if instruments have been loaded from server
   */
  useEffect(() => {
    if (!instruments.length) {
      return null
    }
    window.addEventListener("keydown", (e) => {
      // playInstrument(e)
      updateKeysHistory(e)
      handlePlayedKey(e)
    })
    return () =>
      window.removeEventListener("keydown", (e) => {
        // playInstrument(e)
        updateKeysHistory(e)
        handlePlayedKey(e)
      })
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
