import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"
// import Image from "next/image"
const Colors = () => {
  const { colorSelection, setColorSelection } = useContext(SettingsContext)

  const onDelete = (deleteColor) => {
    setColorSelection(colorSelection.filter((color) => color !== deleteColor))
  }

  return (
    <div style={{ paddingBottom: "16px" }}>
      {colorSelection.map((color) => (
        <div
          key={color}
          style={{
            background: color,
            display: "inline-block",
            padding: "24px",
            margin: "16px",
            position: "relative",
            borderRadius: "40px",

            boxShadow:
              "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px 0px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px, rgba(0, 0, 0, 0.09) 0px 32px 16px 0px",
          }}
        >
          <button
            onClick={() => onDelete(color)}
            style={{
              background: "#ffcb74",
              color: "#333",
              display: "inline-block",
              borderRadius: "50%",
              position: "absolute",
              top: "-7px",
              right: "-7px",
              border: "none",
              fontSize: "18px",
              lineHeight: 1,
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
          >
            <img
              src="https://i.postimg.cc/qMJdyGrn/multiply.png"
              alt="gradientmonkey"
              style={{ marginLeft: "-2px" , marginTop: "-2px" }}
              width={15}
              height={15}
              layout="fill"
            />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Colors
