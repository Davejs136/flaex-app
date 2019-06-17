import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import containerStyles from "../pages/portfolio.module.less"

const FendTemplate = ({ data }) => (

  <StaticQuery
    query={graphql`
      query FendTemplate {
        allStrapiWork(filter: {subcategory: {eq: "front-end"}}) {
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
      <ul className={containerStyles.works}>
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

export default FendTemplate
