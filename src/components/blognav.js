import React from "react"
import { Link } from "gatsby"

const activeStyles = {
  filter: "invert(1)",
  border: "1px",
  borderColor: "#dedede",
  borderStyle: "solid",
}

const BlognavComponent = () => (
  <div className="navsec">
    <Link to="/about-me" activeStyle={activeStyles}>
      bio
    </Link>
    <Link to="/blog" activeStyle={activeStyles}>
      blog
    </Link>
  </div>
)

export default BlognavComponent
