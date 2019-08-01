import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Blognav from "../components/blognav"
import GoogleMap from "../components/googleMap"
import containerStyles from "./bio.module.less"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ReactMarkdown = require("react-markdown/with-html")

let faicon = null
let faprefix = null

const BioTemplate = () => (
  <Layout>
    <Blognav />
    <StaticQuery
      query={graphql`
        query BioTemplate {
          strapiProfile {
            name
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
        <section>
          <div className={containerStyles.profile}>
            <div className={containerStyles.avatar}>
              <Img fluid={data.strapiProfile.avatar.childImageSharp.fluid} />
            </div>
            <h1>{data.strapiProfile.headline}</h1>
          </div>
          <p>
            Hello, my name is <i>{data.strapiProfile.name}.</i>{" "}
            {data.strapiProfile.summary}
          </p>
          <h2>My skills</h2>
          <div className={containerStyles.skills}>
            {data.allStrapiSkill.edges.map(document => (
              <div key={document.node.id}>
                <FontAwesomeIcon
                  icon={[
                    (faprefix = document.node.prefix.replace(/'/g, "")),
                    (faicon = document.node.icon.replace(/'/g, "")),
                  ]}
                  size="2x"
                />
                <p>{document.node.title}</p>
              </div>
            ))}
          </div>

          <h2>A brief story</h2>
          <ReactMarkdown source={data.strapiProfile.story} escapeHtml={false} />
          <h2>Where I live</h2>
          <GoogleMap />
          <p>{data.strapiLocation.description} </p>
        </section>
      )}
    />
  </Layout>
)

export default BioTemplate
