import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ThankYouPage = ({ data }) => (
  <Layout>
    <h1 className="bgsize">¡Mensaje enviado!</h1>
    <p>Te responderé a la bredad posible</p>
    <div className="video-container">
      <div key={data.strapiPosition.id}>
        <video autoPlay>
          <source
            src={data.strapiPosition.video.publicURL}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </Layout>
)

export default ThankYouPage

export const query = graphql`
  query ThankYouPage {
    strapiPosition(name: { eq: "3a" }) {
      id
      name
      video {
        publicURL
      }
    }
  }
`
