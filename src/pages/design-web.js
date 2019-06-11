import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import containerStyles from "../pages/design.module.less"

const DesignWebTemplate = ({ data }) => (
  <Layout>
  <div className={containerStyles.navsec}>
    <div>
      <Link to="/design">logo</Link>
    </div>
    <div>
    <Link to="/design-prints">prints</Link>
    </div>
    <div className={containerStyles.active}>
    <Link to="/design-web">web design</Link>
    </div>
    <div>
    <Link to="/design-typography">typography</Link>
    </div>
  </div>
    <StaticQuery
      query={graphql`
        query DesignWebTemplate {
          allStrapiWork(filter: {subcategory: {eq: "web design"}}) {
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

export default DesignWebTemplate
