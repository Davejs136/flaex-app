import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas)

const Page = ({ children }) => (
  <Layout>
    <Helmet>
      setTimeout(function () {
          let viewheight = $(window).height();
          let viewwidth = $(window).width();
          let viewport = document.querySelector("meta[name=viewport]");
          viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
      }, 300);
     </Helmet>
    <main>{children}</main>
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
