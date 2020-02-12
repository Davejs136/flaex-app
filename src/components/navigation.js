import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl-graphql"

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
      to={`${messages.static.lang}/portfolio`}
      activeStyle={activeStyles}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...activeStyles } }
          : null
      }
      aria-label={messages.static.views.portfolio.seo_title}
    >
      <span>{messages.static.components.navigation.portfolio}</span>
    </Link>
    <Link
      to={`${messages.static.lang}/blog`}
      activeStyle={activeStyles}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...activeStyles } }
          : null
      }
      aria-label="Go to the frontend portfolio page"
    >
      <span>{messages.static.components.navigation.blog}</span>
    </Link>
    <Link
      to={`${messages.static.lang}/contact`}
      activeStyle={activeStyles}
      aria-label="Go to the contact page"
    >
      <span>{messages.static.components.navigation.contact}</span>
    </Link>
  </nav>
)

export default injectIntl(Navigation)
