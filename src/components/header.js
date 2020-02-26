import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { injectIntl } from "gatsby-plugin-intl-graphql"

// Main page header component

const Header = ({ intl: { messages } }) => (
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
            <Link
              to={`/${messages.static.lang}`}
              aria-label="Go to the randomizer"
            >
              <Img fluid={data.head.childImageSharp.fluid} />
            </Link>
          </div>
          <div className="logotag">
            <Link
              to={`/${messages.static.lang}/about-me`}
              aria-label="Go to the bio"
            >
              <Img fluid={data.tag.childImageSharp.fluid} />
            </Link>
            <span className="tooltiptext">
              {messages.static.components.header.about_me}
            </span>
          </div>
        </div>
      </header>
    )}
  />
)

export default injectIntl(Header)
