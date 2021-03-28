/* eslint react/prop-types: 0 */
import React from "react"

const Key = ({ instrument = {} }) => (
  <div id={`${instrument.keyboardPosition}`} className="instrument-single">
    <span className="instrument-name">{instrument.name}</span>
    <span className="instrument-key">{instrument.keyboardPosition}</span>
  </div>
)

export default Key
