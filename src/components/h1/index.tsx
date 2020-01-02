import React from "react";
import styled from "styled-components";
import Box from "../box";
import theme from "../theme";

export interface H1 {
  children?: React.ReactNode;
  color?: string;
}

const StyledH1 = styled(Box)`
  font-family: ${theme.primaryFont};
  color: ${({ color }) => color || theme.charcoal};
  font-size: 60px;
  line-height: 1;
`;

const H1: React.FC<H1> = props => <StyledH1 {...props} as="h1" />;

export default H1;
