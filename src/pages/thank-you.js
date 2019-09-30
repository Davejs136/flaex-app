import React from "react"
import Layout from "../components/layout"
import { injectIntl } from "gatsby-plugin-intl"

const ThankYouPage = ({ intl }) => (

    <Layout>
      <h1 className="bgsize">{intl.formatMessage({ id: "thank_you.title" })}</h1 >
      <p>{intl.formatMessage({ id: "thank_you.message" })}</p>
    </Layout>
 
)

export default injectIntl(ThankYouPage)