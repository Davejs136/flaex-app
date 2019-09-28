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
        graphic
        <br />
        design
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
        front-end
        <br />
        dev
      </span>
    </Link>
    <Link to="/contact" activeStyle={activeStyles}>
      <span>
        contact
        <br />
        me
      </span>
    </Link>
  </nav>
)

export default Navigation
