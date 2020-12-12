import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Welcome from '../components/Welcome'
import PostFeed from '../components/PostFeed'
import PlaygroundFeed from '../components/PlaygroundFeed'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <h2>Blog.</h2>
    <PostFeed />
    <h2>Playground.</h2>
    <PlaygroundFeed />
  </Layout>
)

export default IndexPage
