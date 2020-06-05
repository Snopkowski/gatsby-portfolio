import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { ExtLink, Button } from "../components/common"

const Contact = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" description="Tell me about your idea" />
        <h1>Get in touch</h1>
        <p>
          Fill out the form below or{" "}
          <ExtLink href="mailto:hello@snopkowski.com">
            {" "}
            drop a message at hello@snopkowski.com
          </ExtLink>
        </p>
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thanks/"
        >
          <input type="hidden" aria-label='form' name="form-name" value="contact" />
          <label htmlFor="name">Name:</label>
          <input aria-label='name' type="text" id="name" name="name" required />
          <label htmlFor="email">Your Email:</label>
          <input aria-label='email' type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea name="message" aria-label='message' id="message" type="text" rows="6" required />
          <Button type="submit">Send</Button>
        </Form>
      </Layout>
    </div>
  )
}

export default Contact

const Form = styled.form`
  width: 100%;

  > input,
  select,
  textarea {
    width: 100%;
    padding: 6px;
    border: 2px solid var(--textNormal);
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 3px;
    margin-bottom: 16px;
    resize: vertical;
    background-color: var(--bg);
    color: var(--textNormal);
  }
`
