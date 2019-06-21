import React from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import containerStyles from "../pages/portfolio.module.less"


const SubcatTemplate = ({ data }) => (

  <Layout>
    <div className={containerStyles.navsec}>
      <input type="submit" value="&#60;&#60; back" onClick={() => window.history.back()} />
    </div>
    <article>
      <h1>{data.strapiWork.title}</h1>
      <p>{data.strapiWork.description}</p>
      <Img fluid={data.strapiWork.thumbnail.childImageSharp.fluid} />
    </article>
  </Layout>

)

export default SubcatTemplate

export const query = graphql`
  query SubcatTemplate {
    strapiWork(subcategory: { eq: "prints" }) {
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
`
