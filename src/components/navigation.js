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
    >
      <span>
        desarrollo
        <br />
        front-end
      </span>
    </Link>
    <Link to="/contact" activeStyle={activeStyles}>
      <span>
        contactame
        <br />+ info
      </span>
    </Link>
  </nav>
)

export default Navigation
