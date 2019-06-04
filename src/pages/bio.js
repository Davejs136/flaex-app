import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import containerStyles from "../pages/styles.module.less"


const BioTemplate = ({ data }) => (
  <Layout>
      <div className={containerStyles.navsec}>
        <div>
          <Link to="/bio">bio</Link>
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
                  fixed(width: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        `}
      render={data => (
        <>
        <Img fixed={data.strapiProfile.avatar.childImageSharp.fixed} />
        <h1>{data.strapiProfile.name}</h1>

        </>
      )}
    />
  </Layout>

)

export default BioTemplate
