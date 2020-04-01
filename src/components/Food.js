import React from "react";
import { food } from "../api/api";
import styled from "styled-components"

const CardStyle = styled.div `
    border: 1px solid #0003;
    width: fit-content;
    margin-bottom: 5px;
    border-radius: 4px;
    margin: 20px;
    box-shadow: 0 5px 5px 5px #0003;
    overflow: hidden;
    margin-right: 3%
  
`

const Food = () => {
  return food.map(item => (

    <CardStyle key={item.id}>
      <img src={item.image} alt="food image" />
      <h3>{item.price}</h3>
      <p>{item.name}</p>
    </CardStyle>
  ));
};
export default Food;
