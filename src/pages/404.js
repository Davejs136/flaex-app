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
        <h1 className="bgsize">
          Not found page
          <span aria-label="emoji" role="img">
            😔
          </span>
        </h1>
        <p>You just hit a route that doesn't exist.</p>
        <p>
          Do not feel bad, use the main menu to go any page you like!{" "}
          <span aria-label="emoji" role="img">
            😃
          </span>
        </p>
        <div className="notfound">
          <Img fluid={data.notFound.childImageSharp.fluid} />
        </div>
      </Layout>
    )}
  />
)

export default NotFoundPage
