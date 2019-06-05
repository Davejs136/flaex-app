import { Link, StaticQuery, graphql } from 'gatsby'
/** @jsx jsx */
import {css,jsx} from '@emotion/core'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import GoogleMap from '../components/googleMap'
import containerStyles from "../pages/bio.module.less"

const BioTemplate = ({ data }) => (
  <Layout>
      <div className={containerStyles.navsec}>
        <div>
          <Link
             to="/bio"
             css={css `
               font-weight:bolder;
               text-decoration: underline !important;
               font-weight: 900;
             `}
          >[ bio ]</Link>
        </div>
        <div>
          <Link to="/blog">[ blog ]</Link>
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
                  fixed( width: 70) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            },
            strapiLocation {
          		city
           	}
          }
        `}
      render={data => (
        <section>
          <div className={containerStyles.avatar}>
            <Img fixed={data.strapiProfile.avatar.childImageSharp.fixed}/>
            <h1 >Hey! my name is <br/> {data.strapiProfile.name}</h1>
          </div>
          <p>{data.strapiProfile.summary}</p>
          <h2>Im located in {data.strapiLocation.city} </h2>
          <GoogleMap />
        </section>
      )}
    />
  </Layout>

)

export default BioTemplate
