import React from "react"
import Layout from "../../components/layout"
import Desnav from "../../components/desnav"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import containerStyles from "../../pages/portfolio.module.less"

const WebPage = () => (
  <StaticQuery
    query={graphql`
      query WebPage {
        allStrapiWork(filter: { subcategory: { eq: "web" } }) {
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

export default WebPage
