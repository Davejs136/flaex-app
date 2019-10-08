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

const DevnavComponent = () => (
  <div className="navsec">
    <Link to="/development" aria-label="Ir al portafolio de desarrollo front-end">front-end</Link>
    <Link to="/development/cms" activeStyle={activeStyles} aria-label="Ir al portafolio de temas CMS">
      temas CMS
    </Link>
  </div>
)

export default DevnavComponent
