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
      to="/portfolio/design/logos"
      activeStyle={activeStyles}
      aria-label={messages.static.views.portfolio.design.logos.seo_title}
    >
      {messages.static.views.portfolio.design.logos.title}
    </Link>
    <Link
      to={`${messages.static.lang}/portfolio/design/prints`}
      activeStyle={activeStyles}
      aria-label={messages.static.views.portfolio.design.prints.seo_title}
    >
      {messages.static.views.portfolio.design.prints.title}
    </Link>
    <Link
      to={`${messages.static.lang}/portfolio/design/web`}
      activeStyle={activeStyles}
      aria-label={messages.static.views.portfolio.design.web.seo_title}
    >
      {messages.static.views.portfolio.design.web.title}
    </Link>
    <Link
      to={`${messages.static.lang}/portfolio/design/typography`}
      activeStyle={activeStyles}
      aria-label={messages.static.views.portfolio.design.typography.seo_title}
    >
      {messages.static.views.portfolio.design.typography.title}
    </Link>
  </div>
)

export default injectIntl(DesignNavigationComponent)
