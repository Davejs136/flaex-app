import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import containerStyles from "../pages/bio.module.less"
const ReactMarkdown = require("react-markdown/with-html")

const ArticleTemplate = ({ data }) => (

  <Layout>
    <div className={containerStyles.navsec}>
      <Link to="/blog">&#60;&#60; back</Link>
    </div>
    <article>
      <h1>{data.strapiArticle.title}</h1>
      <p>
        by <Link to="/about-me">{data.strapiArticle.author.username}</Link>
      </p>
      <Img fluid={data.strapiArticle.image.childImageSharp.fluid} />
      <ReactMarkdown
        source={data.strapiArticle.description}
        escapeHtml={false}
      />
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
          fluid(maxWidth: 500) {
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
