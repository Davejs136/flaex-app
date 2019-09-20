import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
const ReactMarkdown = require("react-markdown/with-html")

const openLightbox = event => {
  const node = document.querySelector("#___gatsby")
  node.insertAdjacentHTML(
    "afterbegin",
    `<div id="button-close" class="lightbox"><p onClick="document.getElementById('button-close').remove()">✖</p><img src=${event} alt="Project gallery image" /></div>`
  )
}

const WorkTemplate = ({ data }) => (
  <Layout>
    <div className="navsec">
      <button onClick={() => window.history.back()}>&#60;&#60; back</button>
    </div>
    <article>
      <h1>{data.strapiWork.title}</h1>
      <ul className="work-gallery">
        {data.strapiWork.images.map(document => (
          <li
            key={document.localFile.name}
            onClick={event => openLightbox(event.target.src)}
          >
            <Img
              className="galleryImage"
              fluid={document.localFile.childImageSharp.fluid}
              alt="Project gallery image"
            />
          </li>
        ))}
      </ul>
      <ReactMarkdown
        className="description"
        source={data.strapiWork.description}
        transformImageUri={uri =>
          uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
        }
        escapeHtml={false}
      />
    </article>
  </Layout>
)

export default WorkTemplate

export const query = graphql`
  query WorkTemplate($id: String!) {
    strapiWork(id: { eq: $id }) {
      id
      title
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 675) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      description
      images {
        localFile {
          name
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
