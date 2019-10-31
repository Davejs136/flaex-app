import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PrintsSlide = (props) => (
  <StaticQuery
    query={graphql`
      query PrintsSlide {
        allStrapiWork(  
          limit: 2        
          filter: { subcategory: { eq: "prints" } }
          sort: {
            fields: [createdAt]
            order: DESC
          }
        ) {
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
      <div className="subcategory-slide">
        <h2>{props.title}</h2>
        <ul className="works">
          {data.allStrapiWork.edges.map(document => (

            <li key={document.node.id}>
              <Link
                to={`/${document.node.category}/${
                  document.node.subcategory
                  }/${document.node.slug.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <Img fluid={document.node.thumbnail.childImageSharp.fluid} />
                <h2>{document.node.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
)

export default PrintsSlide

