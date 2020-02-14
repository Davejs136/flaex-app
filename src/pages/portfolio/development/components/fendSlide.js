import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import { injectIntl } from "gatsby-plugin-intl-graphql"

// react-slick component for portfolio page

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
}

const FendSlide = ({ intl: { messages } }) => (
  <StaticQuery
    query={graphql`
      query FendSlide {
        allStrapiWork(
          limit: 6
          filter: { subcategory: { eq: "frontend" } }
          sort: { fields: [createdAt], order: DESC }
        ) {
          edges {
            node {
              id
              title
              category
              subcategory
              slug
              image {
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
        <h3>{messages.static.views.portfolio.development.fend.title}</h3>
        <Slider {...settings}>
          {data.allStrapiWork.edges.map(document => (
            <Link
              key={document.node.id}
              to={`/${messages.static.lang}/portfolio/${document.node.category}/${
                document.node.subcategory
              }/${document.node.slug.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <Img fluid={document.node.image.childImageSharp.fluid} />
            </Link>
          ))}
        </Slider>
        <div className="all">
          <Link
            to={`/${messages.static.lang}/portfolio/development/fend`}
            aria-label={messages.static.views.portfolio.development.fend.seo_title}
          >
            {messages.static.views.portfolio.all} {" ➝"}
          </Link>
        </div>
      </div>
    )}
  />
)

export default injectIntl(FendSlide)
