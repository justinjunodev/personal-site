import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Welcome from '../components/Welcome'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <h2>Hello, Home!</h2>
  </Layout>
)

export default IndexPage
