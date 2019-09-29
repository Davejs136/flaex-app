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

const DevnavComponent = ({ intl }) => (
  <div className="navsec">
    <Link to="/development">
      {intl.formatMessage({ id: "navsec_to_front" })}
    </Link>
    <Link to="/development/cms" activeStyle={activeStyles}>
      {intl.formatMessage({ id: "navsec_to_cms" })}
    </Link>    
  </div>
)

export default injectIntl(DevnavComponent)
