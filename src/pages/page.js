import React from "react"
import { Helmet } from 'react-helmet'
import { withPrefix } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas)

const Page = ({ children }) => (
  <Layout>
    <Helmet>
      <script src={withPrefix("script.js")} type="text/javascript" />
    </Helmet>
    <main>{children}</main>
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
