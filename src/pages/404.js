import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="bgsize">
      Página inexistente{" "}
      <span aria-label="emoji" role="img">
        😔
      </span>
    </h1>
    <p>Intentaste visitar un vínculo que no existe</p>
    <p>
      Usa el menú para volver al sitio!{" "}
      <span aria-label="emoji" role="img">
        😃
      </span>
    </p>
    <div className="video-container">
      <div key={data.strapiPosition.id}>
        <video autoPlay>
          <source src={data.strapiPosition.video.publicURL} type="video/mp4" />
        </video>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPage {
    strapiPosition(name: { eq: "5d" }) {
      id
      name
      video {
        publicURL
      }
    }
  }
`
