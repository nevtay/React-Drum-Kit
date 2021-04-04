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
  const handlePlayedKey = (keyboardPosition) => {
    targetElement = document.querySelector(`#${keyboardPosition}`)
    targetElement.classList.add("playing")
    targetElement.addEventListener("animationend", () =>
      removeAnimationFromElement(targetElement)
    )
    targetElement.removeEventListener("animationend", () =>
      removeAnimationFromElement(targetElement)
    )
  }

  const updateKeysHistory = (keyboardPosition) =>
    setKeys((prev) => [keyboardPosition, ...prev])

  useEffect(() => {
    // let el
    if (instrument.size === 0) {
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let el = document.querySelector(`#${instrument.keyboardPosition}p`)
    document.addEventListener("keydown", (e) => {
      if (e.key === instrument.keyboardPosition) {
        handlePlayedKey(instrument.keyboardPosition)
        updateKeysHistory(instrument.keyboardPosition)
        playInstrument(el)
      }
    })
  }, [instrument])

  useEffect(() => {
    if (instrument.size === 0) {
      return
    }
    let el = document.querySelector(`#${instrument.keyboardPosition}p`)
    document.addEventListener("click", (e) => {
      if (
        e.target.id === instrument.keyboardPosition ||
        e.target.innerText === instrument.name ||
        e.target.innerText === instrument.keyboardPosition
      ) {
        handlePlayedKey(instrument.keyboardPosition)
        updateKeysHistory(instrument.keyboardPosition)
        playInstrument(el)
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
