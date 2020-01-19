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
          nodes {
            id
            title
            icon
            url
            prefix
          }
        }
      }
    `}
    render={data => (
      <footer>
        <p>flaex.com - {new Date().getFullYear()}</p>
        <div className="links">
          {data.allStrapiLink.nodes.map(document => (
            <div key={document.id}>
              <a
                href={document.url}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`Ir a ${document.title}`}
              >
                <FontAwesomeIcon
                  icon={[
                    (faprefix = document.prefix.replace(/'/g, "")),
                    (faicon = document.icon.replace(/'/g, "")),
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
