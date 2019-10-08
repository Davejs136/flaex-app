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
    <Link to="/about-me" aria-label="Ir al perfil">bio</Link>
    <Link to="/blog" activeStyle={activeStyles} aria-label="Ir al al blog">
      blog
    </Link>
  </div>
)

export default BlognavComponent
