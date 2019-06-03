import React from "react"
import PropTypes from "prop-types"
import { StaticQuery } from "gatsby"

import "./boilerplate.css"


const Layout = ({ children }) => (

    <main>{children}</main>

)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
