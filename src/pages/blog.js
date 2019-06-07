import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
/** @jsx jsx */
import {css,jsx} from '@emotion/core'
import Layout from '../components/layout'
import containerStyles from "../pages/blog.module.less"

const BlogTemplate = ({ data }) => (
  <Layout>
  <div className={containerStyles.navsec}>
    <div>
      <Link to="/bio">bio</Link>
    </div>
    <div
      css={css `
        text-decoration: underline !important;
        -webkit-filter: invert(1);
        filter: invert(1);
      `}
    >
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
               date (
                formatString: "DD MMMM YYYY"
                locale: "en-US"
               )
               image {
                  childImageSharp {
                    fluid(maxWidth: 600) {
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
        <ul className={containerStyles.articles}>
          {data.allStrapiArticle.edges.map(document => (
            <li key={document.node.id}>
              <Link to={`/${document.node.id}`}>
                <Img fluid={document.node.image.childImageSharp.fluid} />
              </Link>
              <time>{document.node.date}</time>
              <h2>
                <Link to={`/${document.node.id}`}>{document.node.title}</Link>
              </h2>
            </li>
          ))}
        </ul>
    )}/>
  </Layout>

)

export default BlogTemplate
