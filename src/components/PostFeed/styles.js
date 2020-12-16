import styled from 'styled-components'

export const PostContent = styled.article`
  background: var(--dark-alt);
  padding: var(--scale-5);
  margin-top: var(--scale-5);
  :last-of-type {
    margin-bottom: var(--scale-7);
  }
`

export const PostHeading = styled.h3`
  margin: 0;
`

export const PostDate = styled.p`
  margin-bottom: 0;
`

export const PostExcerpt = styled.p`
  margin: var(--scale-3) 0 0;
`
