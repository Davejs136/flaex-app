import React from "react"
import {Link} from "gatsby"

const activeStyles = {
  filter: 'invert(1)',
  border: '1px',
  borderColor: '#dedede',
  borderStyle: 'solid',
}

const Navigation = () => (
  <nav>
    <Link to="/design" activeStyle={activeStyles}><span>graphic<br/>design</span></Link>
    <Link to="/development" activeStyle={activeStyles}><span>front-end<br/>dev</span></Link>
    <Link to="/contact" activeStyle={activeStyles}><span>contact<br/>me</span></Link>
  </nav>
)

export default Navigation
