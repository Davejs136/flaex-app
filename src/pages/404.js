import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl-graphql"

const NotFoundPage = ({ intl: { messages } }) => (
  <StaticQuery
    query={graphql`
      query {
        notFound: file(relativePath: { eq: "404.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title={messages.static.views.not_found.seo_title}
          description={messages.static.views.not_found.seo_description}
          keywords={messages.static.views.not_found.seo_keywords}
        />
        <h1>
          {messages.static.views.not_found.title}{" "}
          <span aria-label="emoji" role="img">
            😔
          </span>
        </h1>
        <p>{messages.static.views.not_found.description}</p>
        <p>
          {messages.static.views.not_found.message}{" "}
          <span aria-label="emoji" role="img">
            😃
          </span>
        </p>
        <div className="notfound">
          <Img fluid={data.notFound.childImageSharp.fluid} />
        </div>
      </Layout>
    )}
  />
)

export default injectIntl(NotFoundPage)
