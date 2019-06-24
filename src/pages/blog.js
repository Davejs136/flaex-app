import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Blognav from "../components/blognav"
import containerStyles from "../pages/blog.module.less"

const BlogTemplate = ({ data }) => (
  <Layout>
    <Blognav />
    <StaticQuery
      query={graphql`
        query BlogTemplate {
          allStrapiArticle {
            edges {
              node {
                id
                title
                description
                date(formatString: "DD MMMM YYYY", locale: "en-US")
                image {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <ul className={containerStyles.articles}>
          {data.allStrapiArticle.edges.map(document => (
            <li key={document.node.id}>
              <Link to={`/blog/${document.node.id}`}>
                <Img fluid={document.node.image.childImageSharp.fluid} />
              </Link>
              <time>{document.node.date}</time>
              <h2>
                <Link to={`/blog/${document.node.id}`}>
                  {document.node.title}
                </Link>
              </h2>
            </li>
          ))}
        </ul>
      )}
    />
  </Layout>
)

export default BlogTemplate
