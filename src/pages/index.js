import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"
import containerStyles from "./index.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)
let faicon = null
const IndexPage = ({ data }) => (

    <main>
      <div className={containerStyles.menu}>
        <Header />
        <Navigation />
      </div>
      <footer>
        <div className={containerStyles.links}>
          {data.allStrapiLink.edges.map(document => (
            <div key={document.node.id}>
              <a href={document.node.URL} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={['fab', faicon = document.node.icon.replace(/'/g,'')]} size="lg" />
              </a>
            </div>
          ))}
        </div>
        <p>flaex.design ® Freddy Polanía {new Date().getFullYear()}</p>
      </footer>
    </main>

)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiLink {
      edges {
        node {
          id
          icon
          URL
        }
      }
    }
  }
`
