import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/* eslint-disable */

let faicon = null
let faprefix = null

// Main footer component

const Navigation = () => (
  <StaticQuery
    query={graphql`
      query FooterTemplate {
        allStrapiLink {
          edges {
            node {
              id
              title
              icon
              url
              prefix
            }
          }
        }
      }
    `}
    render={data => (
      <footer>
        <p>flaex.com - {new Date().getFullYear()}</p>
        <div className="links">
          {data.allStrapiLink.edges.map(document => (
            <div key={document.node.id}>
              <a
                href={document.node.url}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`Ir a ${document.node.title}`}
              >
                <FontAwesomeIcon
                  icon={[
                    (faprefix = document.node.prefix.replace(/'/g, "")),
                    (faicon = document.node.icon.replace(/'/g, "")),
                  ]}
                  fixedWidth
                  size="lg"
                />
              </a>
            </div>
          ))}
        </div>
      </footer>
    )}
  />
)

export default Navigation
