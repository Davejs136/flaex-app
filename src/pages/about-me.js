import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import GoogleMap from "../components/googleMap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ReactMarkdown = require("react-markdown/with-html")

/* eslint-disable */

let faicon = null
let faprefix = null

const BioTemplate = () => (
  <Layout>
    <div className="navsec">
      <Link className="firstactive" to="/about-me">
        bio
      </Link>
      <Link to="/blog">blog</Link>
    </div>
    <StaticQuery
      query={graphql`
        query BioTemplateEs {
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
            description_es
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
            <div className="avatar">
              <Img fluid={data.strapiProfile.avatar.childImageSharp.fluid} />
            </div>
            <h1>{data.strapiProfile.headline_es}</h1>
          </div>
          <p>
            Hello, my name is <i>{data.strapiProfile.name}.</i>{" "}
            {data.strapiProfile.summary_es}
          </p>
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
                <p>{document.node.title}</p>
              </div>
            ))}
          </div>

          <h2>A brief story</h2>
          <ReactMarkdown
            source={data.strapiProfile.story_es}
            escapeHtml={false}
            transformImageUri={uri =>
              uri.startsWith("http")
                ? uri
                : `${process.env.IMAGE_BASE_URL}${uri}`
            }
          />
          <h2>Where I live</h2>
          <GoogleMap />
          <p>{data.strapiLocation.description_es} </p>
        </section>
      )}
    />
  </Layout>
)

export default BioTemplate
