import React, { useState, useEffect } from "react"

const KeyHistory = ({ keys = [] }) => {
  const showLast10Keys = [...keys]
    .filter((key, i) => i < 10)
    .reverse()
    .join(" > ")
  return (
    <>
      <h2>Last Ten Keys</h2>
      {keys.length > 0 ? <p>{showLast10Keys}</p> : <p>Play something!</p>}
    </>
  )
}

export default KeyHistory
