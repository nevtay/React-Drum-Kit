import React from "react"
import Key from "./Key"

const Keys = ({ instruments, setKeys }) => {
  return instruments.map((instrument) => {
    return (
      <div key={instrument.id}>
        <Key instrument={instrument} setKeys={setKeys} />
      </div>
    )
  })
}

export default Keys
