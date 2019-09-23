import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Form } from "react-final-form"
import { Field } from "react-final-form-html5-validation"

const ContactPage = () => (
  <StaticQuery
    query={graphql`
      query {
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
        <h2>Send me a message</h2>
        <Form
          onSubmit
          render={({ handleSubmit, pristine, invalid }) => (
            <form
              id="contact-form"
              className="contact_form"
              name="contact form"
              method="post"
              action="/thank-you"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="contact form" value="contact" />      
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

export default ContactPage
