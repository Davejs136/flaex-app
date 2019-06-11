import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
/** @jsx jsx */
import {css,jsx} from '@emotion/core'
import Layout from '../components/layout'
import containerStyles from "../pages/blog.module.less"

const DesignTemplate = ({ data }) => (
  <Layout>
  <div className={containerStyles.navsec}>
    <div
      css={css `
        text-decoration: underline !important;
        -webkit-filter: invert(1);
        filter: invert(1);
      `}
    >
      <Link to="/design">logo</Link>
    </div>
    <div>
    <Link to="/blog">prints</Link>
    </div>
    <div>
    <Link to="/blog">web design</Link>
    </div>
    <div>
    <Link to="/blog">typography</Link>
    </div>
  </div>
    <StaticQuery
      query={graphql`
        query DesignTemplate {
          allStrapiWork(filter: {subcategory: {eq: "logo"}}) {
            edges {
              node {
                id
                title
                thumbnail {
                  childImageSharp {
                    fluid(maxWidth: 500) {
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
        <ul>
          {data.allStrapiWork.edges.map(document => (
            <li key={document.node.id}>
              <Link to={`/${document.node.id}`}>
                <Img fluid={document.node.thumbnail.childImageSharp.fluid} />
              </Link>
              <h2>
                <Link to={`/${document.node.id}`}>{document.node.title}</Link>
              </h2>
            </li>
          ))}
        </ul>
    )}/>
  </Layout>

)

export default DesignTemplate
