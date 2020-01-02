import React from "react";
import styled from "styled-components";
import Box from "../box";
import theme from "../theme";

export interface H3 {
  children?: React.ReactNode;
  color?: string;
}

const StyledH3 = styled(Box)`
  font-family: ${theme.primaryFont};
  color: ${({ color }) => color || theme.charcoal};
  font-size: 22px;
  line-height: 30px;

  ${theme.tablet} {
    font-size: 18px;
    line-height: 26px;
  }
`;

const H3: React.FC<H3> = props => <StyledH3 {...props} as="h3" />;

export default H3;
