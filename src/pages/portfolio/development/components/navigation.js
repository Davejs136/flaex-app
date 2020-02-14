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

// Navigation links for design category

const DesignNavigationComponent = ({ intl: { messages } }) => (
  <div className="navsec">
    <button onClick={() => window.history.back()}>&#10229;</button>
    <Link
      to={`/${messages.static.lang}/portfolio/development/fend`}
      activeStyle={activeStyles}
      aria-label={messages.static.views.portfolio.development.fend.seo_title}
    >
      {messages.static.views.portfolio.development.fend.title}
    </Link>
    <Link
      to={`/${messages.static.lang}/portfolio/development/cms`}
      activeStyle={activeStyles}
      aria-label={messages.static.views.portfolio.development.cms.seo_title}
    >
      {messages.static.views.portfolio.development.cms.title}
    </Link>
  
  </div>
)

export default injectIntl(DesignNavigationComponent)
