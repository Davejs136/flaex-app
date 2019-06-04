import React from 'react'
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
           	}
          }
        `}
      render={data => (
        <section>
          <Img fixed={data.strapiProfile.avatar.childImageSharp.fixed}/>
          <h1 className={containerStyles.avatar}>Hi name is <br/> {data.strapiProfile.name}</h1>
          <p>{data.strapiProfile.summary}</p>
          <h1>Im located in {data.strapiLocation.city} </h1>
          <GoogleMap />
        </section>
      )}
    />
  </Layout>

)

export default BioTemplate
