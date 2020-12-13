import styled from 'styled-components'

export const NavContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--scale-5);
`

export const NavLogo = styled.span`
  font-size: var(--scale-4);
  font-weight: var(--heading);
`

export const NavMenu = styled.ul`
  display: flex;
  margin: 0;
`

export const NavMenuItem = styled.li`
  list-style: none;
  margin-top: 0.25rem;
  :not(:last-of-type) {
    margin-right: var(--scale-3);
  }
`
