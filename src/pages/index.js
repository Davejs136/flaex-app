import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Navigation from "../components/navigation"
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
    <footer>
      <p>flaex.design ® Freddy Polanía {new Date().getFullYear()}</p>
      <div className={containerStyles.links}>
        {data.allStrapiLink.edges.map(document => (
          <div key={document.node.id}>
            <a href={document.node.URL} rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={['fab', document.node.icon.replace(/'/g,'')]} size="lg" />
            </a>
          </div>
        ))}
      </div>
    </footer>
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
