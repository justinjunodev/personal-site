import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Link from '../components/Link'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not found!" />
    <h1>Page Not Found.</h1>
    <p>
      This page does not exist or has been moved. Go to{' '}
      <Link to="/">home page</Link>?
    </p>
  </Layout>
)

export default NotFoundPage
