import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

// Container for internal pages
const Page = ({ children }) => (
  <Layout>
    <main>{children}</main>
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
