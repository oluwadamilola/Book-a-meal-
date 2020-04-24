import React from 'react';
import styled from 'styled-components'
import {Button, Nav} from '../styles/style'

 const Header = (props) => {
    return (
        <Nav>
           <Button primary onClick="{props.Signin}">  Sign In</Button>
           <Button>Register</Button>
        </Nav>
    )
}
export default Header;
