import Colors from "./Colors"
import AddColor from "./AddColor"
import AngleRange from "./AngleRange"
import SpeedRange from "./SpeedRange"
import Random from "./Random"

const Controls = () => (
  <div
    style={{
      
      maxWidth: "640px",
      borderRadius: "8px",
      margin: "auto",
      marginTop: "40px",
      padding: "32px",
      color: "#111",
    }}
 
    className="bg-pattern"

  >
    <Colors />
    <AddColor />
    <AngleRange />
    <SpeedRange />
    <Random />
  </div >
)

export default Controls
