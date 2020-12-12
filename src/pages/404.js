import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Link from '../components/Link'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <Header title="404." />
    <h2>Page Not Found!</h2>
    <p>
      This page does not exist or has been moved. Go to{' '}
      <Link to="/">home page</Link>?
    </p>
  </Layout>
)

export default NotFoundPage
