import React from "react";
import styled from "styled-components";
import Box from "../box";
import theme from "../theme";

export interface H2 {
  children?: React.ReactNode;
  color?: string;
}

const StyledH2 = styled(Box)`
  font-family: ${theme.primaryFont};
  color: ${({ color }) => color || theme.charcoal};
  font-size: 28px;
  line-height: 35px;

  ${theme.tablet} {
    font-size: 20px;
    line-height: 28px;
  }
`;

const H2: React.FC<H2> = props => <StyledH2 {...props} as="h2" />;

export default H2;
