import React from 'react'
import PropTypes from 'prop-types'
import { TwitterShareButton, RedditShareButton } from 'react-share'
import { FaTwitter, FaRedditAlien } from 'react-icons/fa'

const Share = ({ title, url }) => (
  <div>
    <strong>Share on:</strong>
    <ul>
      <li>
        <RedditShareButton url={url} title={title}>
          <FaRedditAlien />
        </RedditShareButton>
      </li>
      <li>
        <TwitterShareButton
          url={url}
          title={`Check out "${title}" on `}
          via="justinjunodev"
        >
          <FaTwitter />
        </TwitterShareButton>
      </li>
    </ul>
  </div>
)

Share.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Share
