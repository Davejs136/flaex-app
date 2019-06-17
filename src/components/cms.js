import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import containerStyles from "../pages/portfolio.module.less"

const CmsTemplate = ({ data }) => (

  <StaticQuery
    query={graphql`
      query CmsTemplate {
        allStrapiWork(filter: {subcategory: {eq: "CMS themes"}}) {
          edges {
            node {
              id
              title
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
      <ul className={containerStyles.works} id="cms">
        {data.allStrapiWork.edges.map(document => (
          <li key={document.node.id}>
            <Link to={`/${document.node.id}`}>
              <Img fluid={document.node.thumbnail.childImageSharp.fluid} />
            </Link>
          </li>
        ))}
      </ul>
  )}/>

)

export default CmsTemplate
