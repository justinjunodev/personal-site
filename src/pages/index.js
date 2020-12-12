import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import PostFeed from '../components/PostFeed'
import PlaygroundFeed from '../components/PlaygroundFeed'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Hello, World!">
      My name is Justin Juno. I'm an experienced Frontend Developer and UI
      Designer seeking career opportunities. I'd love to join a talented team of
      diverse engineers who value aesthetics, accessibility, and mentorship.
      Here you can learn more about me, peruse the beginnings of a blog, and
      explore my playground.
    </Header>
    <h2>Blog.</h2>
    <PostFeed />
    <h2>Playground.</h2>
    <PlaygroundFeed />
  </Layout>
)

export default IndexPage
