import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Img from "gatsby-image"


const DesignPage = ({ intl }) => (
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
        <div className="navsec">
          <Link className="firstactive" to="/design">
           {intl.formatMessage({ id: "navsec_to_logo" })}
          </Link>
          <Link to="/design/prints">
            {intl.formatMessage({ id: "navsec_to_print" })}
          </Link>
          <Link to="/design/web">
            {intl.formatMessage({ id: "navsec_to_web" })}
          </Link>
          <Link to="/design/typography">
            {intl.formatMessage({ id: "navsec_to_typography" })}
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

export default injectIntl(DesignPage)
