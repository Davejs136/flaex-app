import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { injectIntl } from "gatsby-plugin-intl-graphql"
import { window } from "browser-monads"
import { PinterestShareButton, PinterestIcon } from "react-share"

//Share work URL
const shareUrl = window.location.href

const ReactMarkdown = require("react-markdown/with-html")

const openLightbox = event => {
  const node = document.querySelector("#___gatsby")
  /*  const src = event.target.src */
  node.insertAdjacentHTML(
    "afterbegin",
    `<div id="lightbox" class="lightbox" onClick="document.getElementById('lightbox').remove()">
        <p onClick="document.getElementById('lightbox').remove()">✖</p>
        <img src=${event} alt="Project gallery image" />
     </div>`
  )
}

const WorkTemplate = ({ data, intl: { messages }}) => (
  <Layout>
    <SEO
      title={data.strapiWork.title}
      image={data.strapiWork.image.childImageSharp.fluid.src}
      description={data.strapiWork.seo_description}
    />
    <div className="navsec">
      <button onClick={() => window.history.back()}>&#10229;</button>
    </div>
    <article>
      <h1>{messages.logos[1].title}</h1>
      <div className="city-year">
        {messages.static.views.works.city}: {messages.logos[1].city}. {messages.static.views.works.year}: {messages.logos[1].year}
      </div>    
      <ul className="works work-images">
        {data.strapiWork.gallery.map(items => (
          <li key={items.localFile.name}>
            {/* eslint-disable */}
            <div
              onClick={event => openLightbox(event.target.src)}
              onKeyDown={event => openLightbox(event.target.src)}
            >
              <Img
                className="galleryImage"
                fluid={items.localFile.childImageSharp.fluid}
                title={data.strapiWork.img_title}
                alt={data.strapiWork.img_alt}
                onClick={event => openLightbox(event.target.src)}
                onKeyDown={event => openLightbox(event.target.src)}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="two-columns">
        <ReactMarkdown
          className="description"
          source={messages.logos[1].content.description}
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
            media={`${window.location.protocol}//${window.location.hostname}${data.strapiWork.image.childImageSharp.fluid.src}`}
            windowWidth={675}
            windowHeight={675}
            description={messages.logos[1].content.description}
          >
            <PinterestIcon size={32} />
          </PinterestShareButton>
        </li>
      </ul>
    </article>
  </Layout>
)

export default injectIntl(WorkTemplate)

export const query = graphql`
  query WorkTemplate($id: String) {
    strapiWork(id: { eq: $id }) {
      id   
      image {
        childImageSharp {
          fluid(maxWidth: 675) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gallery {
        localFile {
          name
          childImageSharp {
            fluid(maxWidth: 675) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
