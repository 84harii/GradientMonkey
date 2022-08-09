import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"


const Random = () => {
  const { setColorSelection, setAngle, setSpeed } = useContext(SettingsContext)

  const goRandom = () => {
    const numColors = 3 + Math.round(Math.random() * 3)
    const colors = [...Array(numColors)].map(() => {
      // https://css-tricks.com/snippets/javascript/random-hex-color/
      return "#" + Math.floor(Math.random() * 16777215).toString(16)
    })
    setColorSelection(colors)
    setAngle(Math.floor(Math.random() * 361))
    setSpeed(Math.floor(Math.random() * 10) + 1)
  }

  return (
    <div style={{ padding: "48px 0 16px" }}>

      <button aria-label='Thanks' className='h-button centered' data-text='Create' onClick={goRandom}>
        <span>C</span>&nbsp;
        <span>r</span>&nbsp;
        <span>e</span>&nbsp;
        <span>a</span>&nbsp;
        <span>t</span>&nbsp;
        <span>e</span>&nbsp;
        <span>d</span>&nbsp;
      </button>


    </div>
  )
}

export default Random
