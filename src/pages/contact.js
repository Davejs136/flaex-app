import React from "react"
import Layout from "../components/layout"
import * as emailjs from "emailjs-com"

export default class ContactPage extends React.Component {
  handleSubmit = event => {
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        "#contact-form",
        "user_RfSf1tcSTDweZVWXo3B3m"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text)
        },
        err => {
          console.log("FAILED...", err)
        }
      )
    alert(`Your message has been sent`)
  }

  render() {
    return (
      <Layout>
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="text" />
          <input type="submit" value="Send" />
        </form>
      </Layout>
    )
  }
}
