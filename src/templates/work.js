import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import containerStyles from "../pages/portfolio.module.less"


const openLightbox = (event) => { 
  const node = document.querySelector('#___gatsby');  
  node.insertAdjacentHTML ('afterbegin', `<div id="button-close" class=${containerStyles.lightbox}><p onClick="document.getElementById('button-close').remove()">&#128473;</p><img src=${event} alt="Project gallery image"  /></div>`)  

}

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
          <li key={document.localFile.name} onClick={(event) => openLightbox(event.target.src)}>                              
            <Img fluid={document.localFile.childImageSharp.fluid} alt="Project gallery image" />               
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
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      description   
      images {
        localFile {
          name
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      } 
    }
  }
`
