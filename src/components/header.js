import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const activeStyles = {
  filter: "invert(1)",
}

const Header = () => (
  <header>
    <StaticQuery
      query={graphql`
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
      render={data => (
        <div>
          <div className="logohead">
            <Link to="/shuffler" activeStyle={activeStyles}>
              <Img fluid={data.head.childImageSharp.fluid} />
            </Link>
          </div>
          <div className="logotag">
            <Link to="/about-me" activeStyle={activeStyles}>
              <Img fluid={data.tag.childImageSharp.fluid} />
            </Link>
          </div>
        </div>
      )}
    />
  </header>
)

export default Header
