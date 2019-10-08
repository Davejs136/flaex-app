import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ReactMarkdown = require("react-markdown/with-html")

const ArticleTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.strapiArticle.title} />          
    <div className="navsec">
      <Link to="/blog">&#10229; volver</Link>
    </div>
    <article>
      <h1>{data.strapiArticle.title}</h1>
      <p className="author">
        por <Link to="/about-me">{data.strapiArticle.author.username}</Link>
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
