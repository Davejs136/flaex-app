import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"

export default function FendSlide(props) {
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
        query FendSlide {
          allStrapiWork(
            limit: 6
            filter: { subcategory: { eq: "front-end" } }
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
          <h3>{props.title}</h3>
          <Slider {...settings}>
            {data.allStrapiWork.edges.map(document => (
              <Link
                key={document.node.id}
                to={`/${document.node.category}/${
                  document.node.subcategory
                }/${document.node.slug.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <Img fluid={document.node.thumbnail.childImageSharp.fluid} />
              </Link>
            ))}
          </Slider>
          <div className="all">
            <Link
              to="/development/fend"
              aria-label="Ir al portafolio de desarrollo front-end"
            >
              ver todos&nbsp;➝
            </Link>
          </div>
        </div>
      )}
    />
  )
}
