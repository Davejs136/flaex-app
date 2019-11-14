import React from "react"
import Layout from "../../../components/layout"
import Navigation from "./components/navigation"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../../../components/seo"

const WebPage = () => (
  <StaticQuery
    query={graphql`
      query WebPage {
        allStrapiWork(filter: { tag: { eq: "web" } }) {
          edges {
            node {
              id
              title
              category
              subcategory
              slug
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
        <SEO title="diseño web" />
        <h1 className="hidden">diseño web</h1> 
        <Navigation />
        <ul className="works">
          {data.allStrapiWork.edges.map(document => (
            <li key={document.node.id}>
              <Link
                to={`/portfolio/${document.node.category}/${
                  document.node.subcategory
                }/${document.node.slug.replace(/\s+/g, "-").toLowerCase()}`}
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

export default WebPage
