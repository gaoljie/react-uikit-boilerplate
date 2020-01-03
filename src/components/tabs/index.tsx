import React, { useState } from "react";
import styled from "styled-components";
import { forceCheck } from "react-lazyload";
import Box from "../box";
import theme from "../theme";

export interface TabsProps {
  onTabClick?: Function;
  gap?: string;
  opacity?: number;
  selectedIndex?: number;
}

const Tabs: React.FC<TabsProps> = props => {
  const { onTabClick, ...rest } = props;

  const { children, selectedIndex = 0 } = rest;
  const [selected, setSelected] = useState(selectedIndex);

  const tabOnClick = (index: number): void => {
    setSelected(index);

    if (onTabClick) {
      onTabClick(index);
    }

    setTimeout(forceCheck);
  };

  return (
    <>
      <StyledTabs {...rest} as="nav">
        {React.Children.map(children, (child, i) => {
          if (!React.isValidElement(child)) return child;

          return (
            <child.type
              {...child.props}
              selected={selected === i}
              onClick={() => child.props.clickable !== false && tabOnClick(i)}
            />
          );
        })}
      </StyledTabs>

      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return child;

        if (typeof child.props.children === "string")
          return <p hidden={selected !== i}>{child.props.children}</p>;

        if (Array.isArray(child.props.children))
          return <div hidden={selected !== i}>{child.props.children}</div>;

        return (
          <child.props.children.type
            {...child.props.children.props}
            hidden={selected !== i}
          />
        );
      })}
    </>
  );
};

const StyledTabs = styled(Box)<TabsProps>`
  display: grid;
  grid-column-gap: ${({ gap }) => gap || 0};
  font-family: ${theme.primaryFont};
  grid-template-columns: repeat(
    ${({ children }) => React.Children.count(children)},
    auto
  );
  justify-items: center;
`;

export default Tabs;
