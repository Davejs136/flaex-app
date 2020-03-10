import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Faces(props) {
  const [count, setCount] = useState(0)
  const { id, path, allImages, timer } = props

  useEffect(() => {
    const timeout = setInterval(() => {
      if (count < allImages.length - 1) {
        setCount(count + 1)
      } else {
        setCount(0)
      }
    }, timer)

    // cleanup
    return () => {
      clearTimeout(timeout)
      const img = document.querySelector(`#${id}`)
      img.src = ''
    }
  }, [count])

  useEffect(() => {
    const img = document.querySelector(`#${id}`)
    const random = shuffle(allImages)[0]
    
    if (img.src.includes('localhost')) {
      // Development Host
      img.src = `http://localhost:8000/${path}/${random}`
    } else {
      const host = img.src // Production host
      const location = `${host}/${path}/${random}`
      img.src = location
    }
    
  })

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

  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: { siteUrl },
        },
      }) => {
        const local = "http://localhost:8000"
        return (
          <div style={{ width: "16rem" }}>
            <img src={process.env.DEPLOY_URL ? siteUrl : local} alt={"image bla" + count} id={id} />
          </div>
        )
      }}
    />
  )
}

const query = graphql`
  query Faces {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
