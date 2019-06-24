import React from "react"
import Layout from "../../components/layout"
import Desnav from "../../components/desnav"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import containerStyles from "../../pages/portfolio.module.less"

const PrintsPage = () => (
  <StaticQuery
    query={graphql`
      query PrintsPage {
        allStrapiWork(filter: { subcategory: { eq: "prints" } }) {
          edges {
            node {
              id
              title
              category
              subcategory
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 300) {
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
        <Desnav />
        <ul className={containerStyles.works}>
          {data.allStrapiWork.edges.map(document => (
            <li key={document.node.id}>
              <Link
                to={`/${document.node.category}/${document.node.subcategory}/${
                  document.node.id
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

export default PrintsPage
