import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { injectIntl } from "gatsby-plugin-intl"
import SEO from "../components/seo"

const NotFoundPage = ({ intl }) => (
  <StaticQuery
    query={graphql`
      query {
        notFound: file(relativePath: { eq: "404.png" }) {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="404: Not found" />
        <h1 className="bgsize">
          {intl.formatMessage({ id: "notfound.title" })}{" "}
          <span aria-label="emoji" role="img">
            😔
          </span>
        </h1>
        <p>{intl.formatMessage({ id: "notfound.descriptionA" })}</p>
        <p>{intl.formatMessage({ id: "notfound.descriptionB" })}{" "}
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
