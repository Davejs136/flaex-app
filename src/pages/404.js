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
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="404: No encontrado" />
        <h1>
          Página inexistente{" "}
          <span aria-label="emoji" role="img">
            😔
          </span>
        </h1>
        <p>Intentaste visitar un vínculo que no existe.</p>
        <p>
          ¡Usa el menú para volver al sitio!{" "}
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
