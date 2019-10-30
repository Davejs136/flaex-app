import React from "react"
import Layout from "../components/layout"
import Devnav from "../components/devnav"
import SEO from "../components/seo"

const DevelopmentPage = () => (
  <Layout>
    <SEO title="desarrollo front-end" />
    <h1 className="hidden">desarrollo front-end</h1>
    <Devnav />
  </Layout>
)

export default DevelopmentPage
