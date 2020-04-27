import React from 'react';
import styled from 'styled-components';
import {Navstyled} from '../styles/style';

export const Nav = styled.nav `
 height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: 2px solid white;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3)
`
export const ListItem = styled.li `
font-size: 20px;
    list-style-type: none
`
 const Header = (props) => {
    return (
        <Navstyled>
      <Nav className="navbar">
        <div className="nav">
          <ul className=" nav-links">
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/episodes">Sign In</Link>
            </ListItem>
          </ul>
        </div>
      </Nav>
    </Navstyled>
    )
}
export default Header;
