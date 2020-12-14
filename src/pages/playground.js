import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import PlaygroundFeed from '../components/PlaygroundFeed'
import Link from '../components/Link'

const PlaygoundPage = () => (
  <Layout>
    <SEO title="Playground" />
    <Header title="Playground." />
    <h2>Ready to play?</h2>
    <p>
      Here you can reference, explore, and experiment with my code via{' '}
      <Link
        to="https://www.codesandbox.io"
        label="Learn more and visit CodeSandbox"
        isExternal
      >
        Code Sandbox
      </Link>
      . If you enjoy or find these sandboxes useful,{' '}
      <Link
        to="https://www.twitter.com/justinjunodev"
        label="Talk to me on Twitter"
        isExternal
      >
        let me know on Twitter
      </Link>
      .{' '}
    </p>
    <PlaygroundFeed />
  </Layout>
)

export default PlaygoundPage
