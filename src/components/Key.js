/* eslint react/prop-types: 0 */
import React, { useEffect } from "react"

const Key = ({ instrument = {}, setKeys }) => {
  const playInstrument = (inst) => {
    inst.pause()
    inst.currentTime = 0
    inst.play()
  }

  const removeAnimationFromElement = (element) => {
    element.classList.remove("playing")
  }

  let targetElement
  const handlePlayedKey = (e) => {
    targetElement = document.querySelector(`#${e.key}`)
    targetElement.classList.add("playing")
    targetElement.addEventListener("animationend", () =>
      removeAnimationFromElement(targetElement)
    )
    targetElement.removeEventListener("animationend", () =>
      removeAnimationFromElement(targetElement)
    )
  }

  const updateKeysHistory = (e) => {
    if (e.key === instrument.keyboardPosition) {
      setKeys((prev) => [instrument.keyboardPosition, ...prev])
    }
    return null
  }

  /**
   * @description sets "keydown" event listener if instruments have been loaded from server
   */
  useEffect(() => {
    if (instrument.size === 0) {
      return
    }
    window.addEventListener("keydown", (e) => {
      updateKeysHistory(e)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instrument])

  let el
  useEffect(() => {
    if (instrument.size === 0) {
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    el = document.querySelector(`#${instrument.keyboardPosition}p`)
    document.addEventListener("keydown", (e) => {
      if (e.key === instrument.keyboardPosition) {
        handlePlayedKey(e)
        playInstrument(el)
      }
    })
  }, [instrument])

  useEffect(() => {
    if (instrument.size === 0) {
      return
    }
    document.addEventListener("click", (e) => {
      if (
        e.target.id === instrument.keyboardPosition ||
        e.target.innerText === instrument.name ||
        e.target.innerText === instrument.keyboardPosition
      ) {
        playInstrument()
      }
    })
  }, [instrument])

  return (
    <div id={`${instrument.keyboardPosition}`} className="instrument-single">
      <audio
        id={instrument.keyboardPosition + "p"}
        src={instrument.file}
        preload="auto"
      />
      <span className="instrument-name">{instrument.name}</span>
      <kbd className="instrument-key">{instrument.keyboardPosition}</kbd>
    </div>
  )
}

export default Key
