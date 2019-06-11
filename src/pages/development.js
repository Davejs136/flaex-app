import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import containerStyles from "../pages/design.module.less"

const DevelopmentTemplate = ({ data }) => (
  <Layout>
  <div className={containerStyles.navsec}>
    <div className={containerStyles.active}>
      <Link to="/development">front-end</Link>
    </div>
    <div>
    <Link to="/development-cms">CMS themes</Link>
    </div>
  </div>
    <StaticQuery
      query={graphql`
        query DevelopmentTemplate {
          allStrapiWork(filter: {subcategory: {eq: "front-end"}}) {
            edges {
              node {
                id
                title
                thumbnail {
                  childImageSharp {
                    fluid(maxWidth: 300, maxHeight: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
    render={data => (
        <ul className={containerStyles.works}>
          {data.allStrapiWork.edges.map(document => (
            <li key={document.node.id}>
              <Link to={`/${document.node.id}`}>
                <Img fluid={document.node.thumbnail.childImageSharp.fluid} />
              </Link>
            </li>
          ))}
        </ul>
    )}/>
  </Layout>

)

export default DevelopmentTemplate
