import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';


const PrettoSlider = styled(Slider)({
  color: '#ffcb74',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#111',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#ffcb74',
    color: 'black',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  }
})




const SpeedRange = () => {
  const { speed, setSpeed } = useContext(SettingsContext)



  return (
    <div style={{ fontSize: "18px", fontWeight: "normal" }}>
      <label
        style={{
          display: "inline-block",
          fontWeight: "normal",
          width: "100px",
          textAlign: "center",
        }}
        htmlFor="speed"
      >
        Speed
      </label>

      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={speed}
        onChange={(e) => {
          setSpeed(e.target.value)
        }}

        style={{
          margin: "0 16px",
          width: "240px",
          position: "relative",
          top: "12px",
        }}
      />

      <span
        style={{
          fontSize: "14px",
          padding: "0 8px",
          position: "relative",
          top: "-2px",
          width: "120px",
          display: "inline-block",
        }}
      >
        {speed}
      </span>
    </div>
  )
}

export default SpeedRange
