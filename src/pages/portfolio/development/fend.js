import React from "react"
import Layout from "../../../components/layout"
import Navigation from "./components/navigation"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../../../components/seo"
import { injectIntl } from "gatsby-plugin-intl-graphql"

// Main fend page

const FendPage = ({ intl: { messages } }) => (
  <StaticQuery
    query={graphql`
      query FendPage {
        allStrapiWork(
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
      <Layout>
        <SEO
          title={messages.static.views.portfolio.development.fend.seo_title}
          description={
            messages.static.views.portfolio.development.fend.seo_description
          }
          keywords={
            messages.static.views.portfolio.development.fend.seo_keywords
          }
        />

        <h1 className="hidden">
          {messages.static.views.portfolio.development.fend.title}
        </h1>
        <Navigation />
        <ul className="works">
          {data.allStrapiWork.edges.map(document => (
            <li key={document.node.id}>
              <Link
                to={`/${messages.static.lang}/portfolio/${
                  document.node.category
                }/${document.node.subcategory}/${document.node.slug
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                <Img fluid={document.node.image.childImageSharp.fluid} />
                {messages.works
                  .filter(item => item.id === document.node.id.slice(5))
                  .map(item => (
                    <h2 key={item.id}>{item.title}</h2>
                  ))}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )}
  />
)

export default injectIntl(FendPage)
