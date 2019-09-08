import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

let shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}



const Shuffler = ({ data }) => (
  <Layout>
    <ul>
      {shuffle(data.allStrapiPosition.edges).map(document => (
        <li key={document.node.id}>             
          <video autoplay="autoplay">
            <source src={document.node.video.publicURL} type="video/mp4" />                           
          </video>
        </li>
      ))}
    </ul>  
    <div>

    </div>         
  </Layout>
)

export default Shuffler

export const query = graphql`
  query Shuffler {
    allStrapiPosition
    {
      edges {
        node {
          id
          name 
          video {
            publicURL
          }
        }
      }
    }
  }
`

