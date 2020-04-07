import React from "react"
import ControlFaces from "./controlFaces"

const Faces = props => (
  <div className="faces">
    <ControlFaces id="one" path="faces" timer={1000} />
    <ControlFaces id="two" path="faces" timer={1500} />
    <ControlFaces id="three" path="faces" timer={2000} />
    <ControlFaces id="four" path="faces" timer={2500} />
  </div>
)

export default Faces
