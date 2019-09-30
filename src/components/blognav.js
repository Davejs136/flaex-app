import React from "react"
import { Link } from "gatsby"

const activeStyles = {
  backgroundColor: "#ffffff",
  backgroundImage: "none",
  color: "#1a1a1a",
  border: "1px",
  borderColor: "#1a1a1a",
  borderStyle: "solid",
}

const BlognavComponent = () => (
  <div className="navsec">
    <Link to="/about-me">bio</Link>
    <Link to="/blog" activeStyle={activeStyles}>
      blog
    </Link>
  </div>
)

export default BlognavComponent
