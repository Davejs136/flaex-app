import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const activeStyles = {
  filter: "invert(1)",
}

const Header = () => (
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
      <header>
        <div>
          <div className="logohead">
            <Link to="/shuffler" activeStyle={activeStyles}>
              <Img fluid={data.head.childImageSharp.fluid} />
            </Link>
            <span className="tooltiptext">shuffler</span>
          </div>
          <div className="logotag">
            <Link to="/about-me" activeStyle={activeStyles}>
              <Img fluid={data.tag.childImageSharp.fluid} />
            </Link>
            <span className="tooltiptext">about&nbsp;me</span>
          </div>
        </div>
      </header>
    )}
  />
)

export default Header
