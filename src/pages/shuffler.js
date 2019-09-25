import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const shuffle = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

let positonZero = array => {
  shuffle(array)
  let newArray = array[0]
  return newArray
}

const randomizer = array => {
  positonZero(array)
  const videoContainer = document.querySelector(".video-container")
  videoContainer.innerHTML = `<div key=${array[0].node.id}>             
    <video autoPlay>
      <source src=${
        array[0].node.video.publicURL
      } type="video/mp4" />                           
    </video>
  </div>`
}

const Shuffler = ({ data }) => (
  <Layout>
    <h1 className="bgsize">Randomizer</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
    </p>
    <button
      className="shuffle-btn"
      type="button"
      onClick={event => randomizer(data.allStrapiPosition.edges)}
    >
      Shuffle it! ..🌪
    </button>
    <div className="video-container">
      <div key={data.allStrapiPosition.edges[0].node.id}>
        <video autoPlay>
          <source
            src={data.allStrapiPosition.edges[0].node.video.publicURL}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </Layout>
)

export default Shuffler

export const query = graphql`
  query Shuffler {
    allStrapiPosition {
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
