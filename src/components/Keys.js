import React from "react"
import Key from "./Key"

const Keys = ({ instruments }) =>
  instruments.map((instrument) => {
    return (
      <div key={instrument.id}>
        <Key instrument={instrument} />
      </div>
    )
  })

export default Keys
