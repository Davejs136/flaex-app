import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <StaticQuery
    query={graphql`
      query {
        notFound: file(relativePath: { eq: "404.png" }) {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="404: Not found" />
        <h1>There has been an error 😔</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
        <div className="notfound">
          <Img fluid={data.notFound.childImageSharp.fluid} />
        </div>
        <p>
          Do not feel bad. Use the main menu to follow the path of
          righteousness! 😃
        </p>
      </Layout>
    )}
  />
)

export default NotFoundPage
