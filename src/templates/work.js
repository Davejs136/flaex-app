import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { window } from "browser-monads"
import { PinterestShareButton, PinterestIcon } from "react-share"

const shareUrl = window.location.href

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
    <SEO title={data.strapiWork.title} />
    <div className="navsec">
      <button onClick={() => window.history.back()}>&#10229; volver</button>
    </div>
    <article>
      <h1>{data.strapiWork.title}</h1>
      <div className="city-year">
        Ciudad: {data.strapiWork.city}. Año: {data.strapiWork.year}
      </div>
      <ul className="works">
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
      <div className="two-columns">
        <ReactMarkdown
          className="description"
          source={data.strapiWork.description}
          transformImageUri={uri =>
            uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
          }
          escapeHtml={false}
        />
      </div>
      <h3 className="share-title">Comparte este artículo:</h3>
      <ul className="share">
        <li>
          <PinterestShareButton
            url={shareUrl}
            media={`${window.location.hostname}/${data.strapiWork.thumbnail.childImageSharp.fluid}}`}
            windowWidth={675}
            windowHeight={675}
          >
            <PinterestIcon size={32} />
          </PinterestShareButton>
          {console.log(`${window.location.hostname}${data.strapiWork.thumbnail.childImageSharp.fluid.src}}`)}
        </li>
      </ul>
    </article>
  </Layout>
)

export default WorkTemplate

export const query = graphql`
  query WorkTemplate($id: String!) {
    strapiWork(id: { eq: $id }) {
      id
      title
      year
      city
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
