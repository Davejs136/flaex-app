import React, { Component } from "react"

class Faces extends Component {
  constructor(props) {
    super(props)
    this.el = props.el
    this.path = props.path
    this.state = {
      images: props.allImages,
      time: props.time
    }
  }

  // Initialization
  render() {
    const { images } = this.state
    const location = `${this.path}/${images[0]}`

    /* setInterval(() => {
      if (count === images.length) {
        count = 0
      }

      img.src = `${path}/${images[count]}`

      container.appendChild(img)

      count++
    }, time) */

    return (
      <div>
        <img src={location}/>
      </div>
    )
  }
}

export default Faces
