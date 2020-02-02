import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { injectIntl } from "../../plugins/gatsby-plugin-intl-graphql"

/* eslint-disable */

let faicon = null
let faprefix = null

// Main footer component

const Navigation = ({ intl: { messages } }) => (
  <footer>
    <p>flaex.com - {new Date().getFullYear()}</p>
    <div className="links">
      {messages.links.map(item => (
        <div key={item.id}>
          <a
            href={item.url}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`Ir a ${item.title}`}
          >
            <FontAwesomeIcon
              icon={[
                (faprefix = item.prefix.replace(/'/g, "")),
                (faicon = item.icon.replace(/'/g, "")),
              ]}
              fixedWidth
              size="lg"
            />
          </a>
        </div>
      ))}
    </div>
  </footer>
)

export default injectIntl(Navigation)
