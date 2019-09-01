import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"


const Layout = ({ children }) => (
  <div className="page">
    <div className="menu">
      <Header />
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
