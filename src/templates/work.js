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
      <Img fluid={data.strapiWork.thumbnail.childImageSharp.fluid} />
      <p>{data.strapiWork.description}</p>    
      <ul className={containerStyles.works}>
        {data.strapiWork.images.map(document => (
          <li key={document.localFile.name}>            
              <Img fluid={document.localFile.childImageSharp.fluid} />            
          </li>
        ))}        
      </ul>
    </article>
  </Layout>
)

export default WorkTemplate

export const query = graphql`
  query WorkTemplate($id: String!) {
    strapiWork(id: { eq: $id }) {
      id
      title
      description
      images {
        localFile {
          name
          childImageSharp {
            fluid(maxWidth: 120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }       
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
