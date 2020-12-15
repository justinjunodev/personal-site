import styled from 'styled-components'

export const SocialMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 0 var(--scale-1);
`

export const SocialMenuItem = styled.li`
  span {
    font-weight: var(--heading);
    color: var(--light);
  }
  svg {
    font-size: var(--scale-4);
    display: block;
  }
  :not(:last-of-type) {
    margin-right: var(--scale-3);
  }
`
