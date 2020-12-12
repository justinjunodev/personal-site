import React from 'react'
import Link from '../Link'

const Footer = () => (
  <footer>
    <p>
      Built with{' '}
      <Link
        to="https://www.gatsbyjs.com/"
        label="Visit Gatsby for more info on static site generation"
        isExternal
      >
        Gatsby
      </Link>
      . Hosted on{' '}
      <Link
        to="https://www.netlify.com"
        label="Visit Netlify for more info on hosting options and services"
        isExternal
      >
        Netlify
      </Link>
      . Analytics by{' '}
      <Link
        to="https://usefathom.com"
        label="Visit Fathom for more info on privacy and analytics"
        isExternal
      >
        Fathom
      </Link>
      .
    </p>
    <p>
      <small>All Rights Reserved &copy; {new Date().getFullYear()} </small>
    </p>
  </footer>
)

export default Footer
