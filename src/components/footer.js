import React from "react"
// import {Link} from "gatsby"
/** @jsx jsx */
import {css,jsx} from '@emotion/core'

const Footer = () => (
  <footer
  css={css `
    @media only screen and (min-width:320px) and (max-width:767px) {
        align-self: flex-end center;
    }
  `}
  >
    flaex.design ® Freddy Polanía {new Date().getFullYear()}
  </footer>
)

export default Footer
