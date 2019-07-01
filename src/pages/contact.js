import React from "react"
import Layout from "../components/layout"
import * as emailjs from "emailjs-com"
import containerStyles from "./styles.module.less"
import { Form } from 'react-final-form'
import { Field } from 'react-final-form-html5-validation'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const reset = () => {
  document.getElementById("contact-form").reset();
}

const onSubmit = async values => {
  await sleep(300)
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

const TestPage = () => (
  <Layout>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine, invalid }) => (
        <form 
          id="contact-form" 
          className={containerStyles.contact_form} 
          onSubmit={event =>{
            const promise = onSubmit(event);
            console.log('heyyy :-D', promise);
            promise.then(() => {
            reset()
            })
            return promise
          }}
        >  
          <Field
            name="contact_number"
            component="input"
            type="hidden"            
          />      
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
          <button type="submit" >
            Submit
          </button>
               
        </form>
      )}
    />
  </Layout>  

)

export default TestPage

