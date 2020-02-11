import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import GoogleMap from "../components/googleMap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl-graphql"

const ReactMarkdown = require("react-markdown/with-html")

/* eslint-disable */

let faicon = null
let faprefix = null

const BioTemplate = ({ intl: { messages } }) => (
  <Layout>
    <SEO 
      title={messages.static.views.about_me.seo_title}
      description={messages.static.views.about_me.seo_description} 
      keywords={messages.static.views.about_me.seo_keywords}  
    />
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
            <h1 className="about-me">{messages.static.views.about_me.title}</h1>
            <div className="avatar">
              <Img fluid={data.strapiProfile.avatar.childImageSharp.fluid} />
            </div>
            <h2 className="no-top">{messages.profiles[0].content.headline}</h2>
          </div>
          <div className="two-columns">
            <ReactMarkdown
              source={messages.profiles[0].content.summary}
              escapeHtml={false}
              transformImageUri={uri =>
                uri.startsWith("http")
                  ? uri
                  : `${process.env.IMAGE_BASE_URL}${uri}`
              }
            />
          </div>
          <h2>{messages.static.views.about_me.skills}</h2>
          <div className="skills">
            {messages.skills.map(item => (
              <div key={item.id}>
                <FontAwesomeIcon
                  icon={[
                    (faprefix = item.prefix.replace(/'/g, "")),
                    (faicon = item.icon.replace(/'/g, "")),
                  ]}
                  fixedWidth
                  size="2x"
                />
                <p>{item.content.title}</p>
              </div>
            ))}
          </div>

          <h2>{messages.static.views.about_me.story}</h2>
          <div className="two-columns">
            <ReactMarkdown
              source={messages.profiles[0].content.story}
              escapeHtml={false}
              transformImageUri={uri =>
                uri.startsWith("http")
                  ? uri
                  : `${process.env.IMAGE_BASE_URL}${uri}`
              }
            />
          </div>
          <h2>{messages.static.views.about_me.location}</h2>
          <GoogleMap />
          <ReactMarkdown
            source={messages.locations[0].content.description}
            escapeHtml={false}
            transformImageUri={uri =>
              uri.startsWith("http")
                ? uri
                : `${process.env.IMAGE_BASE_URL}${uri}`
            }
          />
        </section>
      )}
    />
  </Layout>
)

export default injectIntl(BioTemplate)
