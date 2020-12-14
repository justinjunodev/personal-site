import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import PostFeed from '../components/PostFeed'
import Link from '../components/Link'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Header title="Blog." />
    <h2>Yes, another blog about code.</h2>
    <p>
      Here you'll find short articles on various programming concepts and
      topics. If you enjoy or find my posts helpful, please share them or{' '}
      <Link
        to="https://www.twitter.com/justinjunodev"
        label="Talk to me on Twitter"
        isExternal
      >
        let me know on Twitter
      </Link>
      .
    </p>
    <PostFeed />
  </Layout>
)

export default BlogPage
