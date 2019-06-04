import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import containerStyles from "../pages/styles.module.less"

const BlogTemplate = ({ data }) => (
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
        query BlogTemplate {
          allStrapiArticle {
            edges {
              node {
                id
               title
               description
               image {
                  childImageSharp {
                    fixed(width: 250) {
                     ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      `}
    render={data => (
      <>
        <ul>
          {data.allStrapiArticle.edges.map(document => (
            <li key={document.node.id}>
              <h2>
                <Link to={`/${document.node.id}`}>{document.node.title}</Link>
              </h2>
              <Img fixed={document.node.image.childImageSharp.fixed} />
            </li>
          ))}
        </ul>
      </>
    )}
  />
  </Layout>

)

export default BlogTemplate
