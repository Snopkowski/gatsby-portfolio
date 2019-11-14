import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import styled from "styled-components"
import {ExtLink} from '../components/common'

const Contact = () => {
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

    > button {
      background-color: var(--textNormal);
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact me</h1>
        <p>
          Please fill out the form below or{" "}
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
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" type="text" rows="6" required />
          <button type="submit">Send</button>
        </Form>
      </Layout>
    </div>
  )
}

export default Contact
