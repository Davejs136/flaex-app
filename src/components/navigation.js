import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "../../plugins/gatsby-plugin-intl-graphql"

const activeStyles = {
  backgroundColor: "#ffffff",
  backgroundImage: "none",
  color: "#1a1a1a",
  border: "1px",
  borderColor: "#1a1a1a",
  borderStyle: "solid",
}

const linkStyles = {}

// Main page navigation component

const Navigation = ({ intl: { messages } }) => (
  <nav>
    <Link
      to="/portfolio"
      activeStyle={activeStyles}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...activeStyles } }
          : null
      }
      aria-label="Ir al portafolio de diseño gráfico"
    >
      <span>
      {messages.static.components.navigation.portfolio}
      </span>
    </Link>
    <Link
      to="/blog"
      activeStyle={activeStyles}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...activeStyles } }
          : null
      }

      aria-label="Ir al portafolio de desarrollo front-end"
    >
      <span>
        {messages.static.components.navigation.blog}
      </span>
    </Link>
    <Link to="/contact" activeStyle={activeStyles} aria-label="Ir a la información de contacto">
      <span>        
        {messages.static.components.navigation.contact}
      </span>
    </Link>
  </nav>
)

export default injectIntl(Navigation)
