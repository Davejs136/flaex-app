import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Blognav from "../components/blognav"
import SEO from "../components/seo"

const BlogPage = () => (
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
        <ul className="articles">
          <SEO title="blog" />
          <h1 className="hidden">blog</h1>
          {data.allStrapiArticle.edges.map(document => (
            <li key={document.node.id}>
              <Link
                to={`/blog/${document.node.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`
                }
                aria-label={`Ir al artículo ${document.node.title}`}  
              >
                <div className="mainImage">
                  <Img fluid={document.node.image.childImageSharp.fluid} />
                </div>
              </Link>
              <time>{document.node.date}</time>
              <h2>
                <Link
                  to={`/blog/${document.node.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`
                  }
                  aria-label={`Ir al artículo ${document.node.title}`}  
                >
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

export default BlogPage
