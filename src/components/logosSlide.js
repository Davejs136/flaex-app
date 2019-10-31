import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"

export default function LogosSlide(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  }
  return (
    <StaticQuery
      query={graphql`
      query LogosSlide {
        allStrapiWork(               
          filter: { subcategory: { eq: "logo" } }
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
      render={
        data => (
          <Slider className="works slider"  {...settings}>
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
          </Slider>
        )}
    />
  )
}


