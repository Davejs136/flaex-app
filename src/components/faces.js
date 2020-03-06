import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Faces = props => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { siteUrl },
      },
    }) => {
      const { path, allImages } = props
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

      
      /* const location = (index) =>  */

      function location() {
        setInterval(() => {
          let count = 0;
          let location = `http://localhost:8000/${path}/${shuffle(allImages)[count]}`
          count++
  
          return location
        }, 1000)
      }

      console.log('crazy:', location())

      return (
        <div style={{ width: "15em" }}>
          <img src={location} />
          <img src={location} />
          <img src={location} />
          <img src={location} /> 
        </div>
      )
    }}
  />
)

export default Faces

const query = graphql`
  query Faces {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
