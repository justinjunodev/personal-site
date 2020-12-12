import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Link from '../components/Link'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About.</h1>
    <p>
      Hello, my name is Justin Juno. I'm a Frontend Developer and UI Designer
      from East Texas. I'm 33 years young, infinitely curious, and kind. I love
      spending time with my beautiful wife, our twin toddlers, and grumpy
      dachshund. I also enjoy woodworking, grilling, and binge-watching Gilmore
      Girls.
    </p>
    <h2>I'm seeking career opportunities.</h2>
    <p>
      I'd love to join a talented team of diverse engineers who value
      aesthetics, accessibility, and mentorship. While every product and feature
      is different, my goal remains the same. Make the experience memorable,
      intuitive, and inclusive for all users.
    </p>
    <p>
      <strong>My library of choice is React</strong>. I tend to couple it with
      Styled Components, D3, Framer Motion, GraphQL, and Jest/ Enzyme. However,
      I have experience with a lot more and enjoy the challenge of learning
      something new.
    </p>
    <p>
      <em>
        Note: I'm currently on contract and will not be available until
        February.
      </em>
    </p>
    <h3>Goals for 2021.</h3>
    <ul>
      <li>Consume and create more content.</li>
      <li>Learn a new language such as TypeScript, Go, or Elixir.</li>
      <li>
        Provide mentorship and help both aspiring and seasoned developers
        through my personal blog/ playground.
      </li>
      <li>
        Contribute to the open-source community and engage in more
        conversations.
      </li>
    </ul>
    <h4>Get in touch.</h4>
    <p>
      If you'd like to learn more about me, discuss employment possibilities, or
      say hello,{' '}
      <Link
        to="mailto:hello@justinjuno.dev"
        label="Send me an email"
        isExternal
      >
        send me an email
      </Link>{' '}
      or{' '}
      <Link
        to="https://www.twitter.com/justinjunodev"
        label="Reach out on Twitter"
        isExternal
      >
        reach out on Twitter
      </Link>
      .
    </p>
  </Layout>
)

export default AboutPage
