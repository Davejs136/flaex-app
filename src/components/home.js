/**
 * Home layout
 */

import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Home = () => (
  <section>
    <div
      css={css `
        @media only screen and (min-width:320px) and (max-width:767px) {
          display: flex;
          justify-content: center;

        }
      `}
    >
      <div
        css={css `
          @media only screen and (min-width:320px) and (max-width:767px) {
            max-width: 125px;
          }
        `}
      >
        <Header />
        <Navigation />
      </div>
    </div>
    <Footer />
  </section>
)

export default Home
