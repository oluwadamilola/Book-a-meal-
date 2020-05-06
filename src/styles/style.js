import styled from 'styled-components';
import React from 'react'

export const Nav = styled.nav`
padding:10px;
background-color:pink;
`
 export const Button = styled.button` 
  background: ${props => props.Primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
export const foodImage = styled.div `
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2px;
    margin: 5px;
  }
  .CardStyle  img {
    margin-right: 3%;
    margin-bottom: 1.5em;
    display: inline
  }
  .data-loading {
    display: flex;
    justify-content: center;
  }
`
export const Navstyled = styled.nav `
.navbar{
    height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: 2px solid white;
    box-shadow: #476a2e;
    }
.nav-center {
    display: flex;
    justify-content: space-between;
}
.nav-links {
    display: flex;
    align-items: left;
}
.nav-links a {
    text-decoration: none;
    text-transform: capitalize;
    display: inline-block;
    font-weight: bold;
    margin-right: 0.5rem;
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
    transition: var(--mainTransition);
}
.nav-links a:hover {
    color: #476a2e;
}
`

export const ListItem = styled.li `
font-size: 20px;
    list-style-type: none
`