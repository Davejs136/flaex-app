import React from "react"
import { Link } from "gatsby"

const activeStyles = {
  backgroundColor: "#ffffff",
  backgroundImage: "none",
  color: "#1a1a1a",
  border: "1px",
  borderColor: "#1a1a1a",
  borderStyle: "solid",
}

const DesnavComponent = () => (
  <div className="navsec">
    <Link to="/design">logos</Link>
    <Link to="/design/prints" activeStyle={activeStyles}>
      impresos
    </Link>
    <Link to="/design/web" activeStyle={activeStyles}>
      web
    </Link>
    <Link to="/design/typography" activeStyle={activeStyles}>
      tipografía
    </Link>
  </div>
)

export default DesnavComponent
