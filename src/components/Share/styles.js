import styled from 'styled-components'

export const ShareContent = styled.div`
  margin-top: var(--scale-7);
  padding: var(--scale-5);
  background-color: var(--dark-alt);
`

export const ShareMessage = styled.p`
  font-size: var(--scale-3);
  color: var(--light);
  font-weight: var(--bold);
  margin-bottom: var(--scale-2);
`

export const ShareMenu = styled.ul`
  margin-bottom: 0;
`

export const ShareMenuItem = styled.li`
  a::after,
  a:hover::after {
    display: none;
  }
  a,
  span {
    color: var(--lightAlt);
    transition: color 0.3s ease-in-out;
    :hover {
      color: var(--light);
    }
  }
`
