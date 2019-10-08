import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const DevelopmentPage = () => (
  <StaticQuery
    query={graphql`
      query DevelopmentPage {
        allStrapiWork(filter: { subcategory: { eq: "front-end" } }) {
          edges {
            node {
              id
              title
              category
              subcategory
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 675, maxHeight: 675) {
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
      <Layout>
        <SEO title="desarrollo front-end" />
        <h1 className="hidden">desarrollo front-end</h1>  
        <div className="navsec">
          <Link className="firstactive" to="/development" aria-label="Ir al portafolio de desarrollo front-end">
            front-end
          </Link>
          <Link to="/development/cms" aria-label="Ir al portafolio de temas CMS">temas CMS</Link>
        </div>
        <ul className="works">
          {data.allStrapiWork.edges.map(document => (
            <li key={document.node.id}>
              <Link
                to={`/${document.node.category}/${
                  document.node.subcategory
                }/${document.node.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <Img fluid={document.node.thumbnail.childImageSharp.fluid} />
                <h2>{document.node.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )}
  />
)

export default DevelopmentPage
