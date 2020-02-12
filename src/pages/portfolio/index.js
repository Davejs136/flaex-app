import React from "react"
import Layout from "../../components/layout"
import Logos from "./design/components/logosSlide"
/* import Prints from "./portfolio/design/components/printsSlide"
import Web from "./portfolio/design/components/webSlide"
import Typography from "./portfolio/design/components/typographySlide"
import Fend from "./portfolio/development/components/fendSlide"
import Cms from "./portfolio/development/components/cmsSlide" */
import SEO from "../../components/seo"
import { injectIntl } from "gatsby-plugin-intl-graphql"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome icons
import { faPalette } from "@fortawesome/free-solid-svg-icons"
import { faSimplybuilt } from "@fortawesome/free-brands-svg-icons"
// Styles for react-slick
import "../../styles/slick.less"
import "../../styles/slick-theme.less"

// This portfolio page needs the files in 'scr/pages/design' and 'scr/pages/development' in order to render properly

const PortfolioPage = ({ intl: { messages } }) => (
  <Layout>
    <SEO
      title={messages.static.views.portfolio.seo_title}
      description={messages.static.views.portfolio.seo_description} 
      keywords={messages.static.views.portfolio.seo_keywords}
    />
    <h1 className="hidden">{messages.static.views.portfolio.title}</h1>
    <section>
      <h2 className="no-top">
        <FontAwesomeIcon icon={faPalette} fixedWidth size="1x" />
        {messages.static.views.portfolio.design.title} 
      </h2>
      <p className="two-columns">
      {messages.static.views.portfolio.design.description} 
      </p>
      <Logos title={messages.static.views.portfolio.design.logos.title}  />
      {/* <Prints title="impresos" />
      <Web title="web" />
      <Typography title="tipografía" /> */}
    </section>
    <section>
      <h2>
        <FontAwesomeIcon icon={faSimplybuilt} fixedWidth size="1x" />
        {messages.static.views.portfolio.development.title} 
      </h2>
      <p className="two-columns">
      {messages.static.views.portfolio.development.description} 
      </p>
      {/*  <Fend title="front-end" />
      <Cms title="temas CMS" /> */}
    </section>
  </Layout>
)

export default injectIntl(PortfolioPage)
