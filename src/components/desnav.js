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

const DesnavComponent = ({ intl }) => (
  <div className="navsec">
    <Link to="/design">
      {intl.formatMessage({ id: "navsec.to_logo" })}
    </Link>
    <Link to="/design/prints" activeStyle={activeStyles}>
      {intl.formatMessage({ id: "navsec.to_print" })}
    </Link>
    <Link to="/design/web" activeStyle={activeStyles}>
      {intl.formatMessage({ id: "navsec.to_web" })}
    </Link>
    <Link to="/design/typography" activeStyle={activeStyles}>
      {intl.formatMessage({ id: "navsec.to_typography" })}
    </Link>
  </div>
)

export default injectIntl(DesnavComponent)

