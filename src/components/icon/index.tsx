import styled from "styled-components";
import React from "react";
import Box from "../box";

export interface IconProps {
  name?: string;
  width?: string;
}

const Icon: React.FC<IconProps> = props => {
  const { name, width } = props;

  return (
    <StyledSvg {...props} as="svg" height={width}>
      <use xlinkHref={`#${name}`} />
    </StyledSvg>
  );
};

const StyledSvg = styled(Box)``;

export default Icon;
