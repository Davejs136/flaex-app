import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

library.add(fab, fas)

const Page = ({ children }) => (
  <Layout>
    <main>{children}</main>
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
