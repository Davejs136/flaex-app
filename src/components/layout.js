import React from "react"
import PropTypes from "prop-types"
import HeaderPage from "./headerpage"
import Navigation from "./navigation"
import Footer from "./footer"
import SEO from "../components/seo";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas)

const Layout = ({ children }) => (
  <div className="page">
    <SEO />
    <div className="menu">
      <HeaderPage />
      <Navigation />
    </div>
    <main>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
