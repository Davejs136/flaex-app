// import {Link} from "gatsby"

/** @jsx jsx */
import {css, jsx} from '@emotion/core'


const Footer = () => (
  <footer
  css={css `
    @media only screen and (min-width:320px) and (max-width:767px) {
      width:100%
    }
  `}
  >
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
