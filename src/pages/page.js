import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"
import Layout from "../components/layout"
import containerStyles from "./styles.module.less"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)
let faicon = null
const IndexPage = ({ data }) => (
  <Layout>
    <div className={containerStyles.page}>
      <div className={containerStyles.menu}>
        <Header />
        <Navigation />
      </div>

      <h1>Internal page</h1>

      <footer>
        <p>flaex.design ® Freddy Polanía {new Date().getFullYear()}</p>
        <div className={containerStyles.links}>
          {data.allStrapiLink.edges.map(document => (
            <div key={document.node.id}>
              <a href={document.node.URL} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={['fab', faicon = document.node.icon.replace(/'/g,'')]} size="lg" />
              </a>
            </div>
          ))}
        </div>
      </footer>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
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
