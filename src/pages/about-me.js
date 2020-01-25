import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import GoogleMap from "../components/googleMap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SEO from "../components/seo"

const ReactMarkdown = require("react-markdown/with-html")

/* eslint-disable */

let faicon = null
let faprefix = null

const BioTemplate = () => (
  <Layout>
    <SEO title="sobre mi" />
    <StaticQuery
      query={graphql`
        query BioTemplate_en {
          strapiProfile {
            name
            city
            avatar {
              childImageSharp {
                fluid(maxWidth: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            content_en {
              summary
              story
              seo_description
              seo_img_alt
              seo_img_description
              seo_img_title
              headline
            }
          }
          strapiLocation {
            city
            description_en
          }
          allStrapiSkill {
            edges {
              node {
                id
                title_en
                icon
                prefix
              }
            }
          }
        }
      `}
      render={data => (
        <section className="bio">
          <div className="profile">
            <h1 className="about-me">Sobre mi</h1>
            <div className="avatar">
              <Img fluid={data.strapiProfile.avatar.childImageSharp.fluid} />
            </div>
            <h2 className="no-top">{data.strapiProfile.content_en.headline}</h2>
          </div>
          <div className="two-columns">
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
          <h2>Mis habilidades</h2>
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

          <h2>Mi historia</h2>
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
          <h2>Donde vivo</h2>
          <GoogleMap />
          <ReactMarkdown
            source={data.strapiLocation.description_en}
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

export default BioTemplate
