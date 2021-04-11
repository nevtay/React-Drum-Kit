import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import InstrumentsState from "./context/instruments/InstrumentsState"

ReactDOM.render(
  <React.StrictMode>
    <InstrumentsState>
      <App />
    </InstrumentsState>
  </React.StrictMode>,
  document.getElementById("root")
)
