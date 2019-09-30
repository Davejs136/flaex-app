import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { injectIntl, Link } from "gatsby-plugin-intl"

const HeaderPage = ({ intl }) => (
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
            <Link to="/">
              <Img fluid={data.head.childImageSharp.fluid} />
            </Link>
            <span className="tooltiptext">
              {intl.formatMessage({ id: "header.head" })}
            </span>
          </div>
          <div className="logotag">
            <Link to="/about-me">
              <Img fluid={data.tag.childImageSharp.fluid} />
            </Link>
            <span className="tooltiptext">
              {intl.formatMessage({ id: "header.tag" })}
            </span>
          </div>
        </div>
      </header>
    )}
  />
)

export default injectIntl(HeaderPage)
