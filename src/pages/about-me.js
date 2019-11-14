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
        query BioTemplateEs {
          strapiProfile {
            summary
            headline
            summary
            story
            avatar {
              childImageSharp {
                fluid(maxWidth: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          strapiLocation {
            city
            description
          }
          allStrapiSkill {
            edges {
              node {
                id
                title
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
            <h2 className="no-top">{data.strapiProfile.headline}</h2>
          </div>
          <div className="two-columns">
            <ReactMarkdown
              source={data.strapiProfile.summary}
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
                <p>{document.node.title}</p>
              </div>
            ))}
          </div>

          <h2>Mi historia</h2>
          <div className="two-columns">
            <ReactMarkdown
              source={data.strapiProfile.story}
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
            source={data.strapiLocation.description}
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
