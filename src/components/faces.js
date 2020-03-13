import React from "react"
import ControlFaces from "./controlFaces"

const Faces = props => (
  <div>
    <ControlFaces id="one" path="faces" timer={800} />
    <ControlFaces id="two" path="faces" timer={1000} />
    <ControlFaces id="three" path="faces" timer={1200} />
    <ControlFaces id="four" path="faces" timer={1400} />
  </div>
)

export default Faces
