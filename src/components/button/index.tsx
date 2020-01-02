import React from "react";
import styled from "styled-components";
import Box from "../box";
import theme from "../theme";

const Button: React.FC<ButtonProps> = props => {
  return <StyledButton {...props} as="button" />;
};

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  as?: string;
  href?: string;
  disable?: boolean;
}

const StyledButton = styled(Box)`
  background-color: ${theme.primary};
  font-family: ${theme.primaryFont};
  font-weight: 600;
  padding: 15px 30px;
  color: white;
  font-size: 14px;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  display: inline-block;
  &:hover {
    opacity: 0.8;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }

  ${theme.mobile} {
    padding: 10px 15px;
  }
`;

export default Button;
