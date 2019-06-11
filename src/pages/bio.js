import { Link, StaticQuery, graphql } from 'gatsby'
/** @jsx jsx */
import {css,jsx} from '@emotion/core'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import GoogleMap from '../components/googleMap'
import containerStyles from "../pages/bio.module.less"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReactMarkdown = require('react-markdown/with-html')
let faicon = null
let faprefix = null
const BioTemplate = ({ data }) => (
  <Layout>
      <div className={containerStyles.navsec}>
        <div className={containerStyles.active}>
          <Link
             to="/bio"

          >bio</Link>
        </div>
        <div>
          <Link to="/blog">blog</Link>
        </div>
      </div>
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
                  fixed( width: 80) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            },
            strapiLocation {
          		city
              description
           	},
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
          <div className={containerStyles.avatar}>
            <Img fixed={data.strapiProfile.avatar.childImageSharp.fixed}/>
            <h1>{data.strapiProfile.headline}</h1>
          </div>
          <p>Hello, my name is <i>{data.strapiProfile.name}.</i> {data.strapiProfile.summary}</p>
          <h2>My skills</h2>
          <div className={containerStyles.skills}>
            {data.allStrapiSkill.edges.map(document => (
                <div key={document.node.id}>
                  <FontAwesomeIcon icon={[faprefix = document.node.prefix.replace(/'/g,''), faicon = document.node.icon.replace(/'/g,'')]} size="2x" />
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
