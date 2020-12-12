import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import PlaygroundFeed from '../components/PlaygroundFeed'

const PlaygoundPage = () => (
  <Layout>
    <SEO title="Playground" />
    <Header title="Playground." />
    <PlaygroundFeed />
  </Layout>
)

export default PlaygoundPage
