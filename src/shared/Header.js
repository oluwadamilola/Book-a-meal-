import React from 'react';
import styled from 'styled-components'
import {Button, Nav} from '../styles/style'

 const Header = () => {
    return (
        <Nav>
           <Button primary> Sign In</Button>
           <Button>Register</Button>
        </Nav>
    )
}
export default Header;
