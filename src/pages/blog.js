import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import PostFeed from '../components/PostFeed'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Header title="Blog." />
    <PostFeed />
  </Layout>
)

export default BlogPage
