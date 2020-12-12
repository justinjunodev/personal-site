import styled from 'styled-components'

export const NavContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavLogo = styled.span`
  font-weight: var(--heading);
  font-size: var(--scale-4);
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
`

export const NavMenuItem = styled.li`
  list-style: none;
  :not(:last-of-type) {
    margin-right: var(--scale-3);
  }
`
