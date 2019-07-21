import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import containerStyles from "../pages/portfolio.module.less"

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
                  fluid(maxWidth: 300, maxHeight: 225) {
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
        <div className={containerStyles.navsec}>
          <Link className={containerStyles.active} to="/design">
            logos
          </Link>
          <Link to="/design/prints">prints</Link>
          <Link to="/design/web">web</Link>
          <Link to="/design/typography">typography</Link>
        </div>
        <ul className={containerStyles.works}>
          {data.allStrapiWork.edges.map(document => (
            <li key={document.node.id}>
              <Link
                to={`/${document.node.category}/${document.node.subcategory}/${
                  document.node.title.replace(/\s+/g, '-').toLowerCase()
                }`}
              >
                <Img fluid={document.node.thumbnail.childImageSharp.fluid} />
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )}
  />
)

export default DesignPage
