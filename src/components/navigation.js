import React from "react"
import {Link} from "gatsby"

const Navigation = () => (
  <nav>
    <div>
      <Link to="/design">graphic<br/> design</Link>
    </div>
    <div>
      <Link to="/development">front-end<br/> dev</Link>
    </div>
    <div>
      <Link to="/contact">contact<br/>me</Link>
    </div>
  </nav>
)

export default Navigation
