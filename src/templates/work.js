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
    `<div id="lightbox" class="lightbox" onClick="document.getElementById('lightbox').remove()"><p onClick="document.getElementById('lightbox').remove()">✖</p><img src=${event} alt="Project gallery image" /></div>`
  )
}

const WorkTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiWork.title}
      image={data.strapiWork.thumbnail.childImageSharp.fluid.src}
      description={data.strapiWork.seo_description}
    />
    <div className="navsec">
      <button onClick={() => window.history.back()}>&#10229;</button>
    </div>
    <article>
      <h1>{data.strapiWork.title}</h1>
      <div className="city-year">
        Ciudad: {data.strapiWork.city}. Año: {data.strapiWork.year}
      </div>
      <ul className="works work-images">
        {data.strapiWork.images.map(document => (
          <li
            key={document.localFile.name}
            onClick={event => openLightbox(event.target.src)}
          >
            <Img
              className="galleryImage"
              fluid={document.localFile.childImageSharp.fluid}
              title={data.strapiWork.img_title}
              alt={data.strapiWork.img_alt}
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
      <h4 className="share-title">Comparte este proyecto:</h4>
      <ul className="share">
        <li>
          <PinterestShareButton
            children="a"
            url={shareUrl}
            media={`${window.location.protocol}//${window.location.hostname}${data.strapiWork.thumbnail.childImageSharp.fluid.src}`}            
            windowWidth={675}
            windowHeight={675}
            description={data.strapiWork.description}
          >
            <PinterestIcon size={32} />
          </PinterestShareButton>        
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
      img_title
      img_alt
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
      seo_description
    }
  }
`