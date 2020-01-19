import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

// Internal page header component

const HeaderPage = () => (
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
            <Link to="/" aria-label="Ir al inicio">
              <Img fluid={data.head.childImageSharp.fluid} />
            </Link>
            <span className="tooltiptext">inicio</span>
          </div>
          <div className="logotag">
            <Link to="/about-me" aria-label="Ir al perfil">
              <Img fluid={data.tag.childImageSharp.fluid} />
            </Link>
            <span className="tooltiptext">sobre&nbsp;mi</span>
          </div>
        </div>
      </header>
    )}
  />
)

export default HeaderPage
