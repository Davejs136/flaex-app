import { Link } from "gatsby"
import Head from "../components/head"
import Tag from "../components/tag"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Header = () => (
  <header
    css={css`
      @media only screen and (min-width:320px) and (max-width:767px) {
        max-width:125px;
      }
    `}
  >
    <div
      css={css`
        margin-bottom:8px;
      `}
    >
      <Link to="/">
        <Head/>
      </Link>
    </div>
    <div>
      <Link to="/bio">
        <Tag />
      </Link>
    </div>
    <nav>
      <ul>
        <li><Link to="/design">graphic design</Link></li>
        <li><Link to="/development">front-end development</Link></li>
        <li><Link to="/contact">contacv</Link></li>
      </ul>
    </nav>
  </header>

)

export default Header
