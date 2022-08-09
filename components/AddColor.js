import React, { useState, useContext } from "react"
import { ChromePicker } from "react-color"
import { SettingsContext } from "../context/SettingsContext"
import { SketchPicker } from 'react-color'

const AddColor = () => {
  const [color, setColor] = useState("white")
  const { colorSelection, setColorSelection } = useContext(SettingsContext)

  return (
    <>
      <div style={{ display: "inline-block", marginBottom: "32px" }}>
        {/* <ChromePicker
          header="Pick Colors"
          color={color}
          onChange={(newColor) => {
            setColor(newColor.hex)
          }}
        /> */}
        <SketchPicker
          color={color}
          onChange={(newColor) => {
            setColor(newColor.hex)
          }}
        />
      </div>
      <div style={{ paddingBottom: "16px" }}>
        <button aria-label='Thanks' className="h-button centered" data-text='ADD COLOR'
      
          style={{ width: "174px" }}
      
        onClick={() => {
          setColorSelection([...colorSelection, color])
        }}
        >
          <span>a</span>&nbsp;
          <span>d</span>&nbsp;
          <span>d</span>&nbsp;
          <span>e</span>&nbsp;
          <span>d</span>&nbsp;
        </button>
         
      </div>


    </>
  )
}

export default AddColor
