import React from "react"
import { Helmet } from 'react-helmet'
import { withPrefix } from "gatsby"
import Header from "../components/header"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"


library.add(fab, fas)

const IndexPage = () => (
  <div className="home">
    <Helmet>
      <script src={withPrefix("script.js")} type="text/javascript" />
    </Helmet>
    <div className="menu">
      <Header />
      <Navigation />
    </div>
    <Footer />
  </div>
)

export default IndexPage
