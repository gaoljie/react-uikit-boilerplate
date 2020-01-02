import styled from "styled-components";
import Box from "../box";
import theme from "../theme";
import React from "react";

export interface CircleProps {
  width?: string;
  color?: string;
  half?: boolean;
}

const Circle = styled(Box)<CircleProps>`
  width: ${props => props.width || "2px"};
  height: ${props => props.width || "2px"};
  display: inline-block;
  border: 1px solid ${props => props.color || theme.primary};
  background-color: ${props =>
    props.half ? "white" : props.color || theme.primary};
  border-radius: 50%;
`;

export default Circle;
