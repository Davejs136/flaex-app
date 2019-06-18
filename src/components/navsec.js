import React from 'react'
import { Link } from 'gatsby'
import containerStyles from "../pages/bio.module.less"

const activeStyles = {
  filter: 'invert(1)',
  border: '1px',
  borderColor: '#dedede',
  borderStyle: 'solid',
}

const NavsecComponent = ({ data }) => (
  <div className={containerStyles.navsec}>
    <Link to="/about-me" activeStyle={activeStyles}>bio</Link>
    <Link to="/blog" activeStyle={activeStyles}>blog</Link>
  </div>

)

export default NavsecComponent
