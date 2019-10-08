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

const linkStyles = {}

const Navigation = () => (
  <nav>
    <Link
      to="/design"
      activeStyle={activeStyles}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...activeStyles } }
          : null
      }
      aria-label="Ir al portafolio de diseño gráfico"
    >
      <span>
        diseño
        <br />
        gráfico
      </span>
    </Link>
    <Link
      to="/development"
      activeStyle={activeStyles}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...activeStyles } }
          : null
      }

      aria-label="Ir al portafolio de desarrollo front-end"
    >
      <span>
        desarrollo
        <br />
        front-end
      </span>
    </Link>
    <Link to="/contact" activeStyle={activeStyles} aria-label="Ir a la información de contacto">
      <span>
        info +
        <br />
        contacto
      </span>
    </Link>
  </nav>
)

export default Navigation
