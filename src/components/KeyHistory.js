import React, { useState, useEffect } from "react"

const KeyHistory = ({ keys = [] }) => {
  const [currentKeys, setCurrentKeys] = useState([])

  useEffect(() => {
    const lastTenKeys = keys.filter((k, i) => i < 10)
    setCurrentKeys([...lastTenKeys])
  }, [])

  return (
    <>
      <h2>Last Ten Keys</h2>
      {currentKeys.length > 0 ? <p>{currentKeys.join(" > ")}</p> : <p>Play something!</p>}
    </>
  )
}

export default KeyHistory
