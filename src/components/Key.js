/* eslint react/prop-types: 0 */
import React from "react"

const Key = ({ instrument }) => (
  <div>
    <p>{instrument.name}</p> <p>{instrument.keyboardPosition}</p>
  </div>
)

export default Key
