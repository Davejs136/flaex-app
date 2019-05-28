/**
 * Home layout
 */
import React from "react"
import {Link} from "gatsby"
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
import containerStyles from "./home.module.css"

export default () => (
  <section>
    <div className={containerStyles.menu}>
      <Header />
      <Navigation />
    </div>
    <Footer />
  </section>
)

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiLink {
  	  edges {
  	    node {
  	      id
          name
          icon
          URL
  	    }
  	  }
  	}
  }
`
