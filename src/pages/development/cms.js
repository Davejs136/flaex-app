import React from "react"
import Layout from "../../components/layout"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CMSPage = () => (
  <StaticQuery
    query={graphql`
      query CMSPage {
        allStrapiWork(filter: { subcategory: { eq: "cms" } }) {
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
        <div className="navsec">
          <Link to="/development">front-end</Link>
          <Link to="/development/cms" className="active">
            CMS Themes
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
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )}
  />
)

export default CMSPage
