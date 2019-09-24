import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const Thanks = () => {

    return (
        <Layout>
            <Head title='Thank you for ' />
            <h1>Thank you for your message</h1>
            <p>I'll respond as soon as possible.</p>
            <p><Link to='/'>Head home</Link></p>
        </Layout>
    )
}

export default Thanks