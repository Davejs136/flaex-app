import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"

const activeStyles = {
  backgroundColor: "#ffffff",
  backgroundImage: "none",
  color: "#1a1a1a",
  border: "1px",
  borderColor: "#1a1a1a",
  borderStyle: "solid",
}

const linkStyles = {}

const Navigation = ({ intl }) => (
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
        {intl.formatMessage({ id: "navigation_to_designA" })}
        <br />
        {intl.formatMessage({ id: "navigation_to_designB" })}
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
        {intl.formatMessage({ id: "navigation_to_developmentA" })}
        <br />
        {intl.formatMessage({ id: "navigation_to_developmentB" })}
      </span>
    </Link>
    <Link to="/contact" activeStyle={activeStyles}>
      <span>
        {intl.formatMessage({ id: "navigation_to_contactA" })}
        <br />
        {intl.formatMessage({ id: "navigation_to_contactB" })}
      </span>
    </Link>
  </nav>
)

export default injectIntl(Navigation)
