import React from "react"

import Navigation from "../components/navigation"
import Faces from "../components/faces"
import Footer from "../components/footer"
import { injectIntl } from "gatsby-plugin-intl-graphql"
import SEO from "../components/seo"

// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
// add fas and fab to the library
library.add(fab, fas)

// Main app page
const IndexPage = ({ intl: { messages } }) => (
  <div className="home">
    <SEO
      title={messages.static.views.index.seo_title}
      description={messages.static.views.index.seo_description}
      keywords={messages.static.views.index.seo_keywords}
    />
    <h1 className="hidden">{messages.static.views.index.seo_title}</h1>
    <div className="menu">      
      <Navigation />
      {/* <Faces /> */}
    </div>    
    <Footer />
  </div>
)

export default injectIntl(IndexPage)
