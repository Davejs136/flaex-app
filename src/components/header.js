import {Link} from "gatsby"

/** @jsx jsx */
import {jsx} from '@emotion/core'
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Header = () => (<header >
  <div>
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
        `} render={data => <div>
        <Link to="/">
          <Img fluid={data.head.childImageSharp.fluid}/>
        </Link>
        <Link to="/bio">
          <Img fluid={data.tag.childImageSharp.fluid}/>
        </Link>
      </div>}/>
  </div>

</header>)

export default Header
