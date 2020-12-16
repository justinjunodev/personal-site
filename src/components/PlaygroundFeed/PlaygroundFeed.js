import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import usePlaygrounds from '../../hooks/usePlaygrounds'

import Link from '../Link'
import * as S from './styles'

const PlaygroundFeed = () => {
  const playgrounds = usePlaygrounds()

  return (
    <div>
      {playgrounds.map(playground => (
        <S.PlaygroundContent key={playground.sandbox}>
          <Link to={playground.sandbox} label={playground.title} isExternal>
            <S.PlaygroundHeading>{playground.title}</S.PlaygroundHeading>
          </Link>
          <S.PlaygroundInfo>
            <MDXRenderer>{playground.body}</MDXRenderer>
          </S.PlaygroundInfo>
        </S.PlaygroundContent>
      ))}
    </div>
  )
}

export default PlaygroundFeed
