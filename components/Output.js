import React, { useContext, useState } from "react"
import { SettingsContext } from "../context/SettingsContext"

const Output = () => {
  const [copied, setCopied] = useState(false)

  const { colorSelection, speed, angle } = useContext(SettingsContext)

  const background =
    "linear-gradient(" + angle + "deg," + colorSelection.toString() + ")"

  const backgroundSize =
    colorSelection.length * 60 + "%" + " " + colorSelection.length * 60 + "%"

  const animation =
    "gradient-monkey " +
    colorSelection.length * Math.abs(speed - 11) +
    "s ease infinite"

  const code = `.gradient-monkey {
  background: ${background};
  background-size: ${backgroundSize};
  animation: ${animation};
}

@keyframes gradient-monkey {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`

  return (
    <div
      style={{ position: "relative", maxWidth: "640px", margin: "64px auto"  }}
      className="output-div"
    >
      <pre
        style={{
          
          color: "#222",
          padding: "32px",
          width: "100%",
          borderRadius: "4px",
          textAlign: "left",
          whiteSpace: "pre",
          overflowX: "auto",
        }}
      >
        <code>{code}</code>
        <button
           className="copy-btn"
          onClick={() => {
            setCopied(true)
            navigator.clipboard.writeText(code)
          }}
        >
          {copied ? "copied" : "copy"}
        </button>
      </pre>
    </div>
  )
}

export default Output
