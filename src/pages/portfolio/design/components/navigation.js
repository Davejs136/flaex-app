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

const DesignNavigationComponent = () => (
  <div className="navsec">
    <button onClick={() => window.history.back()}>&#10229;</button>
    <Link
      to="/portfolio/design/logos"
      activeStyle={activeStyles}
      aria-label="Ir al portafolio de logos"
    >
      logos
    </Link>
    <Link
      to="/portfolio/design/prints"
      activeStyle={activeStyles}
      aria-label="Ir al portafolio de impresos"
    >
      impresos
    </Link>
    <Link
      to="/portfolio/design/web"
      activeStyle={activeStyles}
      aria-label="Ir al portafolio de diseño web"
    >
      web
    </Link>
    <Link
      to="/portfolio/design/typography"
      activeStyle={activeStyles}
      aria-label="Ir al portafolio de diseño tipográfico"
    >
      tipografía
    </Link>
  </div>
)

export default DesignNavigationComponent
