import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { navigate } from "gatsby-link"
import Layout from "../components/layout"
import { Form } from "react-final-form"
import { Field } from "react-final-form-html5-validation"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactPage() {
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
          <h1>Contact</h1>
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
                <label>Name</label>
                <Field
                  name="user_name"
                  component="input"
                  type="text"
                  required
                  maxLength={20}
                  tooLong="That name is too long!"
                  pattern="[A-Z].+"
                />
                <label>Email</label>
                <Field
                  name="user_email"
                  type="email"
                  typeMismatch="That's not an email address"
                  component="input"
                  required
                />
                <label>Message</label>
                <Field name="text" component="textarea" required />
                <button type="submit">Submit</button>
              </form>
            )}
          />
          <ul className="stack">
            <p>This is web app was built with:</p>
            <li className="jam">
              <Img fluid={data.jam.childImageSharp.fluid} />
            </li>
          </ul>
          <ul className="software">
            <p>Developed using:</p>
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
