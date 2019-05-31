import {Link} from "gatsby"
import {StaticQuery, graphql} from "gatsby"
/** @jsx jsx */
import {css,jsx} from '@emotion/core'
import Img from "gatsby-image"

const Header = () => (

  <header>
    <StaticQuery query={graphql `
          query {
            head: file(relativePath: { eq: "logo.png" }) {
              childImageSharp {
                fluid(maxWidth: 230) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tag: file(relativePath: { eq: "tag.png" }) {
              childImageSharp {
                fluid(maxWidth: 230) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}

        render={data => <div>
          <div
            css={css `
              @media only screen and (min-width:320px) and (max-width:767px) {
                margin-bottom: 4px
              }
            `}
          >
            <Link to="/">
              <Img fluid={data.head.childImageSharp.fluid}/>
            </Link>
          </div>
          <div>
            <Link to="/bio">
              <Img fluid={data.tag.childImageSharp.fluid}/>
            </Link>
          </div>
        </div>}/>
  </header>
)

export default Header
