import React from "react"
import { Link } from "gatsby"


const activeStyles = {
  filter: "invert(1)",
  border: "1px",
  borderColor: "#dedede",
  borderStyle: "solid",
}

const DesnavComponent = () => (
  <div className="navsec">
    <Link to="/design">logos</Link>
    <Link to="/design/prints" activeStyle={activeStyles}>
      prints
    </Link>
    <Link to="/design/web" activeStyle={activeStyles}>
      web
    </Link>
    <Link to="/design/typography" activeStyle={activeStyles}>
      typography
    </Link>
  </div>
)

export default DesnavComponent
