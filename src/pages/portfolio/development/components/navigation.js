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

// Navigation links for development category

const DevelopmentNavigationComponent = () => (
  <div className="navsec">
    <button onClick={() => window.history.back()}>&#10229;</button>
    <Link
      to="/portfolio/development/fend"
      activeStyle={activeStyles}
      aria-label="Ir al portafolio de desarrollo front-end"
    >
      front-end
    </Link>
    <Link
      to="/portfolio/development/cms"
      activeStyle={activeStyles}
      aria-label="Ir al portafolio de temas CMS"
    >
      temas CMS
    </Link>
  </div>
)

export default DevelopmentNavigationComponent
