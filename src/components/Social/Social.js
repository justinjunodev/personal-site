import React from 'react'
import { FaTwitter, FaGithubAlt, FaDev } from 'react-icons/fa'
import Link from '../Link'

const Social = () => (
  <div>
    <ul>
      <li>
        <Link
          to="https://twitter.com/justinjunodev"
          label="View @justinjunodev on Twitter"
          isExternal
        >
          <FaTwitter />
        </Link>
      </li>
      <li>
        <Link
          to="https://github.com/justinjunodev"
          label="View @justinjunodev on Github"
          isExternal
        >
          <FaGithubAlt />
        </Link>
      </li>
      <li>
        <Link
          to="https://dev.to/justinjunodev"
          label="View @justinjunodev on Dev.to"
          isExternal
        >
          <FaDev />
        </Link>
      </li>
    </ul>
  </div>
)

export default Social
