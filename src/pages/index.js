import React from "react"
import Header from "../components/header"
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

const images = ['1a.svg', '1b.svg', '1c.svg', '1d.svg']

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
      <Header />
      <Navigation />
     
    </div>
    <Faces
        id='one'
        path='faces'
        allImages={images}
        timer={800}
      />
    <Faces
        id='two'
        path='faces'
        allImages={images}
        timer={1000}
      />
      <Faces
        id='three'
        path='faces'
        allImages={images}
        timer={1200}
      />
      <Faces
        id='four'
        path='faces'
        allImages={images}
        timer={1500}
      />
    <Footer />
  </div>
)

export default injectIntl(IndexPage)
