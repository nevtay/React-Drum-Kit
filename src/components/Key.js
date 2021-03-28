/* eslint react/prop-types: 0 */
import React from "react"

const Key = ({ instrument = {} }) => (
  <div className="instrument-single">
    <span className="instrument-name">{instrument.name}</span>
    <span className="instrument-key">{instrument.keyboardPosition}</span>
  </div>
)

export default Key
