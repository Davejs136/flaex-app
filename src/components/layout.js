/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import "./layout.css"

const Layout = ({ children }) => (

  <div>
    <Header />
    <Navigation />
    <main
      css={css`
        display: none;
      `}
    >{children}</main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
