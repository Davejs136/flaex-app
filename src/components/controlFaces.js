import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"

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

export default function ControlFaces(props) {
  const images = ["1a.svg", "1b.svg", "1c.svg", "1d.svg", "2a.svg"]
  const [count, setCount] = useState(null)
  const { id, path, timer } = props

  useEffect(() => {
    const timeout = setInterval(() => {
      if (count < images.length - 1) {
        setCount(count + 1)
      } else {
        setCount(0)
      }
    }, timer)

    // cleanup
    return () => {
      clearTimeout(timeout)
      const img = document.querySelector(`#${id}`)
      img.src = ""
    }
  }, [count, id, timer, images])

  useEffect(() => {
    const img = document.querySelector(`#${id}`)
    const random = shuffle(images)[0]

    if (img.src.includes("localhost")) {
      // Development Host
      img.src = `http://localhost:8000/${path}/${random}`
    } else {
      const host = img.src // Production host
      const location = `${host}/${path}/${random}`
      img.src = location
    }
  })

  return (
    <StaticQuery
      query={graphql`
        query Faces {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { siteUrl },
        },
      }) => {
        const local = "http://localhost:8000"
        return (
          <div className="faceItem">
            <img
              src={process.env.DEPLOY_URL ? siteUrl : local}
              alt={"image number " + count}
              id={id}
            />
          </div>
        )
      }}
    />
  )
}
