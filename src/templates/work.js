import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import containerStyles from "../pages/portfolio.module.less"

const WorkTemplate = ({ data }) => (
  <Layout>
    <div className={containerStyles.navsec}>
      <button onClick={() => window.history.back()}>&#60;&#60; back</button>
    </div>
    <article>
      <h1>{data.strapiWork.title}</h1>
      <p>{data.strapiWork.description}</p>
      <Img fluid={data.strapiWork.thumbnail.childImageSharp.fluid} />
    </article>
  </Layout>
)

export default WorkTemplate

export const query = graphql`
  query WorkTemplate($id: String!) {
    strapiWork(id: { eq: $id }) {
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
