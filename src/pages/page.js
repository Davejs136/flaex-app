import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

const Page = ({ children }) => (
  <Layout>
    <main>{children}</main>
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
