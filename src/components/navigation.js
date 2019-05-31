import React from "react"
import {Link} from "gatsby"

const Navigation = () => (
  <nav>
    <div>
      <Link to="/design">graphic<br/> design</Link>
    </div>
    <div>
      <Link to="/development">front-end development</Link>
    </div>
    <div>
      <Link to="/contact">contact</Link>
    </div>
  </nav>
)

export default Navigation
