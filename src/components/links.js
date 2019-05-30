import React from "react"
import containerStyles from "./links.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Links = () => (

    <div className={containerStyles.links}>
      <div>
        <a href="https://github.com/Flaex/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </div>
      <div>
        <a href="https://www.behance.net/freddypolania" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'behance']} />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/Flaex_" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/flaex_" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/freddypolania/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </a>
      </div>
    </div>


)

export default Links
