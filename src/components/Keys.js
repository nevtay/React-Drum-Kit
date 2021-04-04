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

  /**
   * @description sets "keydown" event listener if instruments have been loaded from server
   */
  useEffect(() => {
    if (!instruments.length) {
      return null
    }
    window.addEventListener("keydown", (e) => {
      updateKeysHistory(e)
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
