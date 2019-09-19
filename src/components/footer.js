import * as React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

/* eslint-disable */

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
          <p>@flaex_ ® {new Date().getFullYear()} - EN</p>
          <div className="links">
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
