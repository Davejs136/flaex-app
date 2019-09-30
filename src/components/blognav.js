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

const BlognavComponent = ({ intl }) => (
  <div className="navsec">
    <Link className="firstactive" to="/about-me" activeStyle={activeStyles}>
    {intl.formatMessage({ id: "navsec.to_bio" })}
    </Link>
    <Link to="/blog" activeStyle={activeStyles}>
    {intl.formatMessage({ id: "navsec.to_blog" })}
    </Link>
  </div>
)

export default injectIntl(BlognavComponent)
