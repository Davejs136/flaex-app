import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import GoogleMap from "../components/googleMap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SEO from "../components/seo"
import { injectIntl } from "../../plugins/gatsby-plugin-intl-graphql"

const ReactMarkdown = require("react-markdown/with-html")

/* eslint-disable */

let faicon = null
let faprefix = null

const BioTemplate = ( { intl: { messages } } )  => (
  <Layout>
    <SEO title="about me" />
    <StaticQuery
      query={graphql`
        query BioTemplate {
          strapiProfile {            
            avatar {
              childImageSharp {
                fluid(maxWidth: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }            
          }         
        }
      `}
      render={data => (
        <section className="bio">
          <div className="profile">
            <h1 className="about-me">About me</h1>
            <div className="avatar">
              <Img fluid={data.strapiProfile.avatar.childImageSharp.fluid} />
            </div>
            {console.log(messages)}
            <h2 className="no-top">{messages.profiles[0].content.headline}</h2>
          </div>
          {/* <div className="two-columns">
            <ReactMarkdown
              source={data.strapiProfile.content_en.summary}
              escapeHtml={false}
              transformImageUri={uri =>
                uri.startsWith("http")
                  ? uri
                  : `${process.env.IMAGE_BASE_URL}${uri}`
              }
            />
          </div>
          <h2>My skills</h2>
          <div className="skills">
            {data.allStrapiSkill.edges.map(document => (
              <div key={document.node.id}>
                <FontAwesomeIcon
                  icon={[
                    (faprefix = document.node.prefix.replace(/'/g, "")),
                    (faicon = document.node.icon.replace(/'/g, "")),
                  ]}
                  fixedWidth
                  size="2x"
                />
                <p>{document.node.title_en}</p>
              </div>
            ))}
          </div>

          <h2>My story</h2>
          <div className="two-columns">
            <ReactMarkdown
              source={data.strapiProfile.content_en.story}
              escapeHtml={false}
              transformImageUri={uri =>
                uri.startsWith("http")
                  ? uri
                  : `${process.env.IMAGE_BASE_URL}${uri}`
              }
            />
          </div>
          <h2>Where I live</h2>
          <GoogleMap />
          <ReactMarkdown
            source={data.strapiLocation.description_en}
            escapeHtml={false}
            transformImageUri={uri =>
              uri.startsWith("http")
                ? uri
                : `${process.env.IMAGE_BASE_URL}${uri}`
            }
          /> */}
        </section>
      )}
    />
  </Layout>
)

export default injectIntl(BioTemplate)