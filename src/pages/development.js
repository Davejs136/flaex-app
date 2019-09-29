import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Img from "gatsby-image"

const DevelopmentPage = ({ intl }) => (
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
        <div className="navsec">
          <Link className="firstactive" to="/development">
            {intl.formatMessage({ id: "navsec_to_front" })}
          </Link>
          <Link to="/development/cms">
            {intl.formatMessage({ id: "navsec_to_cms" })}
          </Link>
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

export default injectIntl(DevelopmentPage)