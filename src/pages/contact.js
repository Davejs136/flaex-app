import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { navigate } from "gatsby-link"
import Layout from "../components/layout"
import { Form } from "react-final-form"
import { Field } from "react-final-form-html5-validation"
import { injectIntl } from "gatsby-plugin-intl"


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default injectIntl(function ContactPage({ intl }) {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <StaticQuery
      query={graphql`
        query ContactPage {
          jam: file(relativePath: { eq: "jam.png" }) {
            childImageSharp {
              fluid(maxWidth: 230) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          strapi: file(relativePath: { eq: "strapi.png" }) {
            childImageSharp {
              fluid(maxWidth: 230) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gatsby: file(relativePath: { eq: "gatsby.png" }) {
            childImageSharp {
              fluid(maxWidth: 230) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>                   
          <h1 className="bgsize">
          {intl.formatMessage({ id: "contact.page_title" })}
          </h1>
          <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
              <form
                id="contact-form"
                className="contact_form"
                name="contact"
                method="post"
                action="/thank-you/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                <label>
                  {intl.formatMessage({ id: "contact.form_label_name" })}
                </label>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  required
                  maxLength={20}
                  tooLong="That name is too long!"
                  pattern="[A-Z].+"
                />
                <label>
                  {intl.formatMessage({ id: "contact.form_label_email" })}
                </label>
                <Field
                  name="email"
                  type="email"
                  typeMismatch="That's not an email address"
                  component="input"
                  required
                />
                <label>
                  {intl.formatMessage({ id: "contact.form_label_message" })}
                </label>
                <Field name="message" component="textarea" required />
                <button type="submit">
                {intl.formatMessage({ id: "contact.form_cta" })}
                </button>
              </form>
            )}
          />
          <ul className="stack">
          <p>{intl.formatMessage({ id: "contact.stack" })}</p>
            <li className="jam">
              <Img fluid={data.jam.childImageSharp.fluid} />
            </li>
          </ul>
          <ul className="software">
            <p>{intl.formatMessage({ id: "contact.software" })}</p>
            <li>
              <Img fluid={data.strapi.childImageSharp.fluid} />
            </li>
            <li>
              <Img fluid={data.gatsby.childImageSharp.fluid} />
            </li>
          </ul>
        </Layout>
      )}
    />
  )
})
