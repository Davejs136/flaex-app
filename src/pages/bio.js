import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const BioTemplate = ({ data }) => (
  <Layout>
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
