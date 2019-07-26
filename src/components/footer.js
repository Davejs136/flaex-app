import React from "react"
import { StaticQuery, graphql } from "gatsby"
import containerStyles from "../pages/styles.module.less"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

let faicon = null
let faprefix = null
const Navigation = () => (
  <StaticQuery
    query={graphql`
      query FooterTemplate {
        allStrapiLink {
          edges {
            node {
              id
              icon
              url
              prefix
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <footer>
          <p>flaex.com ® Freddy Polanía {new Date().getFullYear()}</p>
          <div className={containerStyles.links}>
            {data.allStrapiLink.edges.map(document => (
              <div key={document.node.id}>
                <a
                  href={document.node.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={[
                      (faprefix = document.node.prefix.replace(/'/g, "")),
                      (faicon = document.node.icon.replace(/'/g, "")),
                    ]}
                    size="lg"
                  />
                </a>
              </div>
            ))}
          </div>
        </footer>
      </>
    )}
  />
)

export default Navigation
