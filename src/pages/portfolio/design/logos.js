import React from "react"
import Layout from "../../../components/layout"
import Navigation from "./components/navigation"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../../../components/seo"
import { injectIntl } from "gatsby-plugin-intl-graphql"

// Main logos page

const LogosPage = ({ intl: { messages } }) => (
  <StaticQuery
    query={graphql`
      query LogosPage {
        allStrapiWork(
          filter: { subcategory: { eq: "logo" } }
          sort: { fields: [createdAt], order: DESC }
        ) {
          edges {
            node {
              id
              title
              category
              subcategory
              slug
              image {
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
        <SEO title="diseño impresos" />
        <h1 className="hidden">diseño logos</h1>
        <Navigation />
        <ul className="works">
          {data.allStrapiWork.edges.map(document => (
            <li key={document.node.id}>
              <Link
                to={`/portfolio/${document.node.category}/${
                  document.node.subcategory
                }/${document.node.slug.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <Img fluid={document.node.image.childImageSharp.fluid} />
                <h2>{document.node.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )}
  />
)

export default injectIntl(LogosPage)
