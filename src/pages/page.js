import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)

const Page = ({ children }) => (
  <Layout>
    <main>{children}</main>
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
