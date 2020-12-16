import styled from 'styled-components'

export const NavContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--scale-5);
`

export const NavLogo = styled.div`
  a {
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
    :active {
      transform: scale(0.9);
    }
    ::after {
      display: none;
    }
  }
  span {
    font-size: var(--scale-4);
    font-weight: var(--heading);
  }
`

export const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`

export const NavMenuItem = styled.li`
  padding-left: 0;
  ::before {
    display: none;
  }
  :not(:last-of-type) {
    margin: 0 var(--scale-3) 0 0;
  }
`
