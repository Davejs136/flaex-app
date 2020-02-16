import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { injectIntl } from "gatsby-plugin-intl-graphql"
import { window } from "browser-monads"

// Social network share buttons from react-share
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share"

// Get article URL
const viewUrl = window.location.href

const ReactMarkdown = require("react-markdown/with-html")

const ArticleTemplate = ({ data, intl: { messages } }) => (
  <Layout>
    {messages.articles
      .filter(item => item.id === data.strapiArticle.id.slice(8))
      .map(item => (
        <div key={item.id}>
          <SEO
            title={item.content.title}
            description={item.content.seo_description}
            image={data.strapiArticle.image.childImageSharp.fluid.src}            
          />
          <div className="navsec">
            <Link 
            to={`/${messages.static.lang}/blog`} 
            aria-label={messages.static.views.blog.back}>
              &#10229;
            </Link>
          </div>
          <article>
            <h1>{item.content.title}</h1>
            <p className="author">
              por{" "}
              <Link to="/about-me" aria-label={messages.static.views.blog.profile}>
                {data.strapiArticle.author.username}
              </Link>
            </p>
            <div className="mainImage">
              <Img
                fluid={data.strapiArticle.image.childImageSharp.fluid}
                title={item.content.seo_image_title}
                alt={item.content.seo_image_alt}
              />
            </div>
            <div className="two-columns">
              <ReactMarkdown
                className="description"
                source={item.content.description}
                transformImageUri={uri =>
                  uri.startsWith("http")
                    ? uri
                    : `${process.env.IMAGE_BASE_URL}${uri}`
                }
                escapeHtml={false}
              />
            </div>
            <h4 className="share-title">{messages.static.views.blog.share}</h4>
            <ul className="share">
              <li>
                <FacebookShareButton
                  children="a"
                  url={viewUrl}
                  quote={item.content.title}
                >
                  <FacebookIcon size={32} />
                </FacebookShareButton>
              </li>
              <li>
                <TwitterShareButton
                  children="a"
                  url={viewUrl}
                  title={item.content.title}
                >
                  <TwitterIcon size={32} />
                </TwitterShareButton>
              </li>
              <li>
                <LinkedinShareButton children="a" url={viewUrl}>
                  <LinkedinIcon size={32} />
                </LinkedinShareButton>
              </li>
            </ul>
          </article>
        </div>
      ))}
  </Layout>
)

export default injectIntl(ArticleTemplate)

export const query = graphql`
  query ArticleTemplate($id: String) {
    strapiArticle(id: { eq: $id }) {
      id
      image {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }    
      author {     
        username
      }
    }
  }
`
