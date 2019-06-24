import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import containerStyles from "../pages/portfolio.module.less"

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
        <div className={containerStyles.navsec}>
          <Link className={containerStyles.active} to="/development">
            front-end
          </Link>
          <Link to="/development/cms">CMS Themes</Link>
        </div>
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

export default DevelopmentPage
