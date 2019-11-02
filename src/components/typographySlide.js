import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"

export default function TypographySlide(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  }
  return (
    <StaticQuery
      query={graphql`
        query TypographySlide {
          allStrapiWork(
            filter: { subcategory: { eq: "typography" } }
            sort: { fields: [createdAt], order: DESC }
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
        <div className="slider">
          <h2>{props.title}</h2>
          <Slider {...settings}>
            {data.allStrapiWork.edges.map(document => (
              <li key={document.node.id}>
                <Link
                  to={`/${document.node.category}/${
                    document.node.subcategory
                  }/${document.node.slug.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <Img fluid={document.node.thumbnail.childImageSharp.fluid} />  
                </Link>
              </li>
            ))}
          </Slider>
          <Link to="/design/typography" aria-label="Ir al portafolio de tipografía">>> ver más</Link>
        </div>
      )}
    />
  )
}
