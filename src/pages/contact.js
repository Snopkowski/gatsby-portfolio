import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

import contactStyles from './contact.module.scss'

const Contact = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact me</h1>
        <p>
          Please fill out the form below or <a href="mailto:hello@snopkowski.com"> drop a message at hello@snopkowski.com
          </a></p>
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks/" className={contactStyles.form}>
          <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required/>
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" type="text" rows="6"required/>
          <button type="submit">Send</button>
        </form>
          
      </Layout>
    </div>
  )
}

export default Contact;
