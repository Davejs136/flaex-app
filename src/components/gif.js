import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl-graphql"

// Main page header component

const Gifs = ({ intl: { messages } }) => (
  <StaticQuery
    query={graphql`
      query {
        home_a: file(relativePath: { eq: "home-a.gif" }) {
          publicURL
        }
        home_b: file(relativePath: { eq: "home-b.gif" }) {
          publicURL
        }
      }
    `}
    render={data => (
      <div className="gifcontainer">
        <div className="gifs">
          <img src={data.home_a.publicURL} />
        </div>
        <div className="gifs">
          <img src={data.home_b.publicURL} />
        </div>
      </div>
    )}
  />
)

export default injectIntl(Gifs)
