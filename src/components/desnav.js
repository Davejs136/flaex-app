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
    <Link to="/design/logos" activeStyle={activeStyles} aria-label="Ir al portafolio de logos">logos</Link>
    <Link to="/design/prints" activeStyle={activeStyles} aria-label="Ir al portafolio de impresos">
      impresos
    </Link>
    <Link to="/design/web" activeStyle={activeStyles} aria-label="Ir al portafolio de diseño web">
      web
    </Link>
    <Link to="/design/typography" activeStyle={activeStyles} aria-label="Ir al portafolio de diseño tipográfico">
      tipografía
    </Link>
  </div>
)

export default DesnavComponent
