import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo";

const ThankYouPage = () => (
  <StaticQuery
    query={graphql`
      query {
        notFound: file(relativePath: { eq: "ty.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout> 
        <SEO />        
        <h1>¡Mensaje enviado!</h1>
    <p>Te responderé a la brevedad posible</p>
        <div className="notfound">
          <Img fluid={data.notFound.childImageSharp.fluid} />
        </div>
      </Layout>
    )}
  />
)

export default ThankYouPage