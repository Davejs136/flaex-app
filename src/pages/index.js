import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import containerStyles from "./styles.module.less"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)

const IndexPage = ({ data }) => (

  <div className={containerStyles.home}>
    <div className={containerStyles.menu}>
      <Header />
      <Navigation />
    </div>
    <Footer />
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiLink {
      edges {
        node {
          id
          icon
          url
        }
      }
    }
  }
`
