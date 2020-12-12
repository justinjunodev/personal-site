import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import usePlaygrounds from '../../hooks/usePlaygrounds'
import Link from '../Link'

const PlaygroundFeed = () => {
  const playgrounds = usePlaygrounds()

  return (
    <div>
      {playgrounds.map(playground => (
        <article key={playground.sandbox}>
          <Link to={playground.sandbox} label={playground.title} isExternal>
            <h3>{playground.title}</h3>
          </Link>
          <MDXRenderer>{playground.body}</MDXRenderer>
        </article>
      ))}
    </div>
  )
}

export default PlaygroundFeed
