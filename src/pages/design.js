import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const DesignPage = () => (
  <StaticQuery
    query={graphql`
      query DesignPage {
        allStrapiWork(filter: { subcategory: { eq: "logo" } }) {
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
        <SEO title="diseño logotipos" />
        <h1 className="hidden">diseño logotipos</h1>  
        <div className="navsec">
          <Link className="firstactive" to="/design" aria-label="Ir al portafolio de logotipos">
            logos
          </Link>
          <Link to="/design/prints" aria-label="Ir al portafolio de impresos">impresos</Link>
          <Link to="/design/web" aria-label="Ir al portafolio de diseño web">web</Link>
          <Link to="/design/typography" aria-label="Ir al portafolio de diseño tipográfico">tipografía</Link>
        </div>
        <ul className="works">
          {data.allStrapiWork.edges.map(document => (
            <li key={document.node.id}>
              <Link
                to={`/${document.node.category}/${
                  document.node.subcategory
                }/${document.node.title.replace(/\s+/g, "-").toLowerCase()}`
              }
              aria-label={`Ir al artículo ${document.node.title}`}  
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

export default DesignPage
