import React from "react";
import styled from "styled-components";
import Box from "../box";
import theme from "../theme";

export interface InputProps {
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  name: string;
  value: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = props => {
  return <StyledInput {...props} as="input" />;
};

const StyledInput = styled(Box)`
  border: 1px solid ${theme.primary};
  box-sizing: border-box;
  padding-left: 16px;
  height: 38px;
  font-size: 16px;
  outline: none;
`;

export default Input;
