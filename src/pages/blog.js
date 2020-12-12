import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostFeed from '../components/PostFeed'

const BlogPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Blog.</h1>
    <PostFeed />
  </Layout>
)

export default BlogPage
