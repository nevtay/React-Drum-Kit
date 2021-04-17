import React, { useContext } from "react"
import KeyHistoryContext from "../context/keyHistory/keyHistoryContext"

const KeyHistory = () => {
  const keyHistoryContext = useContext(KeyHistoryContext)

  const { keyHistory } = keyHistoryContext

  const keyHistoryToString = [...keyHistory].join(" + ")

  return (
    <div className="key-history-group">
      <h2 className="key-history-title">Last Ten Keys</h2>
      {keyHistory.length > 0 ? (
        <p className="key-history-display">{keyHistoryToString}</p>
      ) : (
        <p>Play something!</p>
      )}
    </div>
  )
}

export default KeyHistory
