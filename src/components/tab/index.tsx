import React from "react";
import styled from "styled-components";
import Box from "../box";
import theme from "../theme";

export interface TabProps {
  title: (string & JSX.Element) | string;
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
  clickable: boolean;
  opacity: number;
  children: React.ReactNode;
}

const StyledTab = styled(Box)<TabProps>`
  ${({ clickable }) => clickable && "cursor: pointer"};
  width: 100%;
  border-bottom: 2px solid
    ${({ selected }) => (selected ? theme.primary : "transparent")};
  color: ${theme.primary};
  opacity: ${({ selected, opacity }) => (selected ? 1 : opacity || 0.5)};
  text-align: center;
`;

const Tab: React.FC<TabProps> = props => {
  const { title, clickable = true } = props;

  return (
    <StyledTab {...props} clickable={clickable}>
      {title}
    </StyledTab>
  );
};

export default Tab;
