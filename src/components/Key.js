/* eslint react/prop-types: 0 */
import React, { useEffect } from "react"

const Key = ({ instrument = {} }) => {
  let el
  const playInstrument = () => {
    el.pause()
    el.currentTime = 0
    el.play()
  }

  useEffect(() => {
    if (instrument.size === 0) {
      return
    }
    el = document.querySelector(`#${instrument.keyboardPosition}p`)
    document.addEventListener("keydown", (e) => {
      if (e.key === instrument.keyboardPosition) {
        playInstrument()
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
