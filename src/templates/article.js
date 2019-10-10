import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { window } from 'browser-monads';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share"

const shareUrl = window.location.href

const ReactMarkdown = require("react-markdown/with-html")

const ArticleTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.strapiArticle.title} image={data.strapiArticle.image.childImageSharp.fluid.src} />
    <div className="navsec">
      <Link to="/blog" aria-label="volver a la página anterior">
        &#10229; volver
      </Link>
    </div>
    <article>
      <h1>{data.strapiArticle.title}</h1>
      <p className="author">
        por{" "}
        <Link to="/about-me" aria-label="Ir al perfil">
          {data.strapiArticle.author.username}
        </Link>
      </p>
      <div className="mainImage">
        <Img fluid={data.strapiArticle.image.childImageSharp.fluid} />
      </div>
      <div className="two-columns">
        <ReactMarkdown
          className="description"
          source={data.strapiArticle.description}
          transformImageUri={uri =>
            uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
          }
          escapeHtml={false}
        />
      </div>
      <h3 className="share-title">Comparte este artículo:</h3>        
      <ul className="share">        
        <li>
          <FacebookShareButton
            url={shareUrl}
          >
            <FacebookIcon size={32} />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton
            url={shareUrl}
          >
            <TwitterIcon size={32} />
          </TwitterShareButton>
        </li>
        <li>
          <LinkedinShareButton
            url={shareUrl}
          >
            <LinkedinIcon size={32} />
          </LinkedinShareButton>
        </li>
      </ul>
    </article>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      description
      image {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`
