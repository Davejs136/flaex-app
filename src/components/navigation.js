import {Link} from "gatsby"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/design">graphic design</Link>
      </li>
      <li>
        <Link to="/development">front-end development</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
