import React from "react";
import styled from "styled-components";
import Box from "../box";
import theme from "../theme";

export interface H5Props {
  color?: string;
}

const StyledH5 = styled(Box)`
  font-family: ${theme.secondaryFont};
  color: ${({ color }) => color || theme.charcoal};
  font-size: 13px;
  line-height: 20px;

  ${theme.tablet} {
    font-size: 12px;
    line-height: 18px;
  }
`;

const H5: React.FC<H5Props> = props => <StyledH5 {...props} as="h5" />;

export default H5;
