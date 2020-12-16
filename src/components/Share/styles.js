import styled from 'styled-components'

export const ShareContent = styled.aside`
  display: flex;
  align-items: center;
  margin-top: var(--scale-3);
  padding: var(--scale-5);
  background-color: var(--dark-alt);
`

export const ShareMessage = styled.p`
  font-size: var(--scale-3);
  margin-bottom: 0;
  strong {
    color: var(--light);
  }
  span {
    margin: 0 0.2rem;
    transition: color 0.3s ease-in-out;
    :hover {
      color: var(--light);
    }
  }
`
