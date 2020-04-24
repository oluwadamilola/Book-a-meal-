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
  }
  .data-loading {
    display: flex;
    justify-content: center;
  }
`