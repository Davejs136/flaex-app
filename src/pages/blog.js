import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ReactMarkdown = require("react-markdown/with-html")

const BlogPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query BlogTemplate {
          allStrapiArticle {
            edges {
              node {
                id
                title
                description
                date(formatString: "DD MMMM YYYY", locale: "es-es")
                image {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                slug
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <h1>Blog de @flaex_</h1>
          <ul className="articles">
            <SEO title="blog" />
            {data.allStrapiArticle.edges.map(document => (
              <li key={document.node.id}>
                <Link
                  to={`/blog/${document.node.slug
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <div className="mainImage">
                    <Img fluid={document.node.image.childImageSharp.fluid} />
                  </div>
                </Link>                
                <h2>
                  <Link
                    to={`/blog/${document.node.slug
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    aria-label={`Ir al artículo ${document.node.title}`}
                  >
                    {document.node.title}
                  </Link>
                </h2>
                <time>{document.node.date}</time>
                <ReactMarkdown
                  className="excerpt"
                  source={document.node.description.substring(0, 80).concat("...")}                 
                  escapeHtml={false}
                />
                 <Link
                    to={`/blog/${document.node.slug
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    aria-label={`Ir al artículo ${document.node.title}`}
                    className="excerpt-link"
                  >
                    Leer más >
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  </Layout>
)

export default BlogPage
