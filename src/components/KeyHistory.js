import React, { useState, useEffect } from "react"

const KeyHistory = ({ keys = [] }) => {
  const showLast10Keys = [...keys]
    .filter((key, i) => i < 10)
    .reverse()
    .join(" > ")
  return (
    <div className="key-history-group">
      <h2 className="key-history-title">Last Ten Keys</h2>
      {keys.length > 0 ? (
        <p className="key-history-display">{showLast10Keys}</p>
      ) : (
        <p>Play something!</p>
      )}
    </div>
  )
}

export default KeyHistory
