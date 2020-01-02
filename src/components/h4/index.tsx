import React from "react";
import styled from "styled-components";
import Box from "../box";
import theme from "../theme";

export interface H4 {
  children?: React.ReactNode;
  color?: string;
}

const StyledH4 = styled(Box)`
  font-family: ${theme.primaryFont};
  color: ${({ color }) => color || theme.charcoal};
  font-size: 17px;
  line-height: 25px;
  font-weight: 600;

  ${theme.tablet} {
    font-size: 15px;
    line-height: 21px;
  }
`;

const H4: React.FC<H4> = props => <StyledH4 {...props} as="h4" />;

export default H4;
