/* eslint react/prop-types: 0 */
import React from "react"

const Key = ({ instrument }) => (
  <div>
    <span>{instrument.name}</span> <span>{instrument.keyboardPosition}</span>
  </div>
)

export default Key
