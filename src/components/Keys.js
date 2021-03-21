import React from "react"
import Key from "./Key"

const Keys = ({ instruments }) =>
  instruments.map((instrument) => {
    return <Key key={instrument.id} instrument={instrument} />
  })

export default Keys
