import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Link from '../components/Link'

const UsesPage = () => (
  <Layout>
    <SEO title="Uses" />
    <h2>Uses</h2>
    <p>
      Curious about my current setup, tools, or apps I use regularly? Here's a
      list! Inspired by and part of the{' '}
      <Link
        to="https://uses.tech/"
        label="View developer setups and gear."
        isExternal
      >
        Uses Project
      </Link>{' '}
      by Wes Bos.
    </p>
    <h3>Hardware.</h3>
    <ul>
      <li>
        <Link
          to="https://www.apple.com/macbook-air/"
          label="Learn more about my Apple laptop"
          isExternal
        >
          <span>Apple</span>
        </Link>{' '}
        - 2019 Macbook Air
      </li>
      <li>
        <Link
          to="https://www.samsung.com/us/computing/monitors/led/samsung-27-curved-led-monitor-lc27f591fdnxza/"
          label="Learn more about my Samsung monitor"
          isExternal
        >
          <span>Samsung</span>
        </Link>{' '}
        - 591 Series 27" LCD Curved Monitor
      </li>
      <li>
        <Link
          to="https://www.bose.com/en_us/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html#v=qc35_ii_black"
          label="Learn more about my Bose headphones"
          isExternal
        >
          <span>Bose</span>
        </Link>{' '}
        - Quiet Comfort 35II Headphones
      </li>
    </ul>
    <h3>Design + Development.</h3>
    <ul>
      <li>
        <Link
          to="https://www.figma.com/"
          label="Learn more about Figma design tools"
          isExternal
        >
          <span>Figma</span>
        </Link>{' '}
        - Prototyping tool for collaborating, wire-framing, and designing.
      </li>
      <li>
        <Link
          to="https://hyper.is/"
          label="Learn more about Hyper term and the command-line"
          isExternal
        >
          <span>Hyper Term</span>
        </Link>{' '}
        - Beautiful and extensible command-line interface.
      </li>
      <li>
        <Link
          to="https://code.visualstudio.com/"
          label="Learn more about VScode for software development"
          isExternal
        >
          <span>VS Code</span>
        </Link>{' '}
        - Code editor for building and debugging modern applications.
      </li>
      <li>
        <Link
          to="https://quokkajs.com/"
          label="Learn more about Quokka for JavaScript debugging"
          isExternal
        >
          <span>Quokka</span>
        </Link>{' '}
        - Rapid IDE JavaScript prototyping.
      </li>
      <li>
        <Link
          to="https://insomnia.rest/graphql/"
          label="Learn more about Insomnia, an HTTP client"
          isExternal
        >
          <span>Insomnia</span>
        </Link>{' '}
        - An advanced open source HTTP client with GraphQL support.
      </li>
      <li>
        <Link
          to="https://kapeli.com/dash"
          label="Learn more about Dash documentation"
          isExternal
        >
          <span>Dash</span>
        </Link>{' '}
        - Offline access to 200+ API documentation sets.
      </li>
    </ul>
    <h3>Productivity.</h3>
    <ul>
      <li>
        <Link
          to="https://magnet.crowdcafe.com/"
          label="Learn more about Magnet for window organization"
          isExternal
        >
          <span>Magnet</span>
        </Link>{' '}
        - Declutters desktops and organizes windows into customizable tiles.
      </li>
      <li>
        <Link
          to="https://www.notion.so/"
          label="Learn more about Notion and note taking"
          isExternal
        >
          <span>Notion</span>
        </Link>{' '}
        - Workspace for planning, writing, and organizing thoughts.
      </li>
      <li>
        <Link
          to="https://slack.com/"
          label="Learn more about a Slack and it's communities"
          isExternal
        >
          <span>Slack</span>
        </Link>{' '}
        - Messaging app for client, team, and community conversations.
      </li>
      <li>
        <Link
          to="https://todoist.com/"
          label="Learn more about Todoist and staying organized"
          isExternal
        >
          <span>Todoist</span>
        </Link>{' '}
        - The to do list to organize work & life.
      </li>
    </ul>
    <h3>Learning.</h3>
    <ul>
      <li>
        <Link
          to="https://google.com"
          label="Learn more about Google and the power of search"
          isExternal
        >
          <span>Google</span>
        </Link>{' '}
        - A powerful search engine with answers for everything.
      </li>
      <li>
        <Link
          to="https://egghead.io/"
          label="Learn more about Egghead and their courses"
          isExternal
        >
          <span>Egghead</span>
        </Link>{' '}
        - Learn JavaScript tools and frameworks from industry pros.
      </li>
      <li>
        <Link
          to="https://frontendmasters.com/"
          label="Learn more about Frontend Masters and their courses"
          isExternal
        >
          <span>Frontend Masters</span>
        </Link>{' '}
        - In-depth and modern frontend engineering courses.
      </li>
      <li>
        <Link
          to="https://www.leveluptutorials.com/"
          label="Learn more about Level Up Tutorials and their courses"
          isExternal
        >
          <span>Level Up Tutorials</span>
        </Link>{' '}
        - Video tutorials for developers and designers.
      </li>
      <li>
        <Link
          to="https://www.freecodecamp.org/"
          label="Learn more about freeCodeCamp and their courses"
          isExternal
        >
          <span>freeCodeCamp</span>
        </Link>{' '}
        - Learn to code at home and earn certificates.
      </li>
    </ul>
    <h3>Community.</h3>
    <ul>
      <li>
        <Link
          to="https://discord.gg/partycorgi"
          label="Learn more about the Party Corgi community"
          isExternal
        >
          <span>Party Corgi Network</span>
        </Link>{' '}
        - Friendly Discord community of content creators.
      </li>
      <li>
        <Link
          to="https://kcd.im/discord"
          label="Learn more about the KCD community"
          isExternal
        >
          <span>KCD</span>
        </Link>{' '}
        - Kent C. Dodds Discord community for connecting devs and sharing ideas.
      </li>
      <li>
        <Link
          to="https://discord.gg/reactiflux"
          label="Learn more about the Reactiflux community"
          isExternal
        >
          <span>Reactiflux</span>
        </Link>{' '}
        - Discord community of 100,000+ React developers.
      </li>
      <li>
        <Link
          to="https://twitter.com/TylerWebDev"
          label="Learn more about the Tyler Web Dev community"
          isExternal
        >
          <span>Tyler Web Dev</span>
        </Link>{' '}
        - An East Texas coding community with monthly meetups.
      </li>
    </ul>
  </Layout>
)

export default UsesPage
