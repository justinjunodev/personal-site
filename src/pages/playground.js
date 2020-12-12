import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PlaygroundFeed from '../components/PlaygroundFeed'

const PlaygoundPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Playground.</h1>
    <PlaygroundFeed />
  </Layout>
)

export default PlaygoundPage
