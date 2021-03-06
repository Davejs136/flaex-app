import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { navigate } from "gatsby-link"
import Layout from "../components/layout"
import { Form } from "react-final-form"
import { Field } from "react-final-form-html5-validation"
import SEO from "../components/seo"
import { useIntl } from "gatsby-plugin-intl-graphql"

// Join values taken form user's input
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

// Contact page component
export default function ContactPage() {
  const messages = useIntl().messages
  // React state management access
  const [state, setState] = React.useState({})
  // Handle input changes
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  // Submmit the form values
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
          <SEO
            title={messages.static.views.contact.seo_title}
            description={messages.static.views.contact.seo_description}
            keywords={messages.static.views.contact.seo_keywords}
          />
          <h1>{messages.static.views.contact.title}</h1>
          <div className="two-columns">
            <p>{messages.static.views.contact.description}</p>
          </div>
          <h2>{messages.static.views.contact.subtitle}</h2>
          <p>{messages.static.views.contact.submessage}</p>
          <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
              <form
                id="contact-form"
                className="contact_form"
                name="contact"
                method="post"
                action="/thank-you/"
                // Netlify form
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
                <label>{messages.static.views.contact.form_name}</label>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  required
                  maxLength={20}
                  tooLong="That name is too long!"
                  pattern="[A-Z].+"
                />
                <label>{messages.static.views.contact.form_mail}</label>
                <Field
                  name="email"
                  type="email"
                  typeMismatch="That's not an email address"
                  component="input"
                  required
                />
                <label>{messages.static.views.contact.form_message}</label>
                <Field name="message" component="textarea" required />
                <button type="submit">
                  {messages.static.views.contact.form_button} &#9654;
                </button>
              </form>
            )}
          />
          <ul className="stack">
            <p>{messages.static.views.contact.made_in}</p>
            <li className="jam">
              <Img fluid={data.jam.childImageSharp.fluid} />
            </li>
          </ul>
          <ul className="software">
            <p>{messages.static.views.contact.dev_with}</p>
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
}
