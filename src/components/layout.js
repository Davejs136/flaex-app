import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
import containerStyles from "../pages/styles.module.less"

import "./boilerplate.css"

const Layout = ({ children }) => (
  <div className={containerStyles.page}>
    <div className={containerStyles.menu}>
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
