import React from "react";
import styled from "styled-components";
import { size, SizeProp } from "../../types";
import { theme } from "../theme";

function getPropWithSize(
  prop: SizeProp | string | number | undefined,
  size: size
) {
  if (typeof prop === "object") return prop[size];

  return prop;
}

function getCSSAttrWithSize(
  name: string,
  prop: string | SizeProp
): string | number {
  if (typeof prop === "object")
    return `
    ${name}: ${prop.xl}
    
    ${
      prop.lg
        ? `
      ${theme.smallDesktop} {
        ${name}: ${prop.lg}
      }`
        : ``
    }
    
    ${
      prop.md
        ? `
      ${theme.tablet} {
        ${name}: ${prop.md}
      }`
        : ``
    }
  
  ${
    prop.sm
      ? `
      ${theme.mobile} {
        ${name}: ${prop.sm}
      }`
      : ``
  }
  `;

  return `${name}: ${prop}`;
}

export interface BoxProps {
  lh?: string;
  as?: string;
  dp?:
    | "block"
    | "flex"
    | "grid"
    | "inline"
    | "inline-block"
    | "inline-flex"
    | "none";
  fw?: "nowrap" | "wrap" | "wrap-reverse" | "inherit" | "initial" | "unset";
  fd?: "row" | "column" | "row-reverse" | "column-reverse";
  ta?: "left" | "right" | "center" | "justify";
  bs?: "content-box" | "border-box";
  width?: string;
  height?: string | SizeProp;
  jc?:
    | "start"
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  ai?:
    | "start"
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "stretch";
  ji?: "start" | "center" | "end" | "stretch";
  bg?: string;
  m?: string;
  p?: string;
  color?: string;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  center?: boolean;
  vCenter?: boolean;
  hCenter?: boolean;
  start?: number | SizeProp;
  fs?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  pb?: string;
}

const StyledBox = styled.div<BoxProps>`
  ${({
    dp,
    fd,
    fw,
    center,
    vCenter,
    hCenter,
    fs,
    lh,
    color,
    ta,
    bs,
    lg,
    md,
    sm,
    xl,
    start,
    width,
    height,
    jc,
    ai,
    ji,
    bg,
    m,
    p,
    mt,
    ml,
    mr,
    mb,
    pt,
    pl,
    pr,
    pb
  }) => `
    ${dp ? `display: ${dp};` : ""}
    ${fd ? `flex-direction: ${fd};` : ""}
    ${fs ? `font-size: ${fs};` : ""}
    ${fw ? `flex-wrap: ${fw};` : ""}
    ${bs ? `box-sizing: ${bs};` : ""}
    ${width ? `width: ${width};` : ""}
    ${height ? getCSSAttrWithSize("height", height) : ""}
    ${color ? `color: ${color};` : ""}
    ${lh ? `line-height: ${lh};` : ""}
    ${jc ? `justify-content: ${jc};` : ""}
    ${ji ? `justify-items: ${ji};` : ""}
    ${ai ? `align-items: ${ai};` : ""}
    ${bg ? `background: ${bg};` : ""}
    ${m ? `margin: ${m};` : ""}
    ${p ? `padding: ${p};` : ""}
    ${ta ? `text-align: ${ta};` : ""}
    ${mt ? `margin-top: ${mt};` : ""}
    ${ml ? `margin-left: ${ml};` : ""}
    ${mr ? `margin-right: ${mr};` : ""}
    ${mb ? `margin-bottom: ${mb};` : ""}
    ${pt ? `padding-top: ${pt};` : ""}
    ${pl ? `padding-left: ${pl};` : ""}
    ${pr ? `padding-right: ${pr};` : ""}
    ${pb ? `padding-bottom: ${pb};` : ""}
    ${center ? `display:grid;place-items:center;` : ""}
    ${vCenter ? `display:flex;align-items:center;` : ""}
    ${hCenter ? `display:grid;justify-items:center;` : ""}
    ${
      xl
        ? `grid-column: ${
            getPropWithSize(start, "xl")
              ? `${getPropWithSize(start, "xl")} / `
              : ""
          } span ${xl}`
        : ""
    }
    ${
      lg || xl
        ? `
    ${theme.smallDesktop} {
      grid-column: ${
        getPropWithSize(start, "lg") || getPropWithSize(start, "xl")
          ? `${getPropWithSize(start, "lg") || getPropWithSize(start, "xl")} / `
          : ""
      } span ${lg || xl}
    }
    `
        : ""
    }
    
     ${
       md || lg || xl
         ? `
    ${theme.tablet} {
      grid-column: ${
        getPropWithSize(start, "md") ||
        getPropWithSize(start, "lg") ||
        getPropWithSize(start, "xl")
          ? `${getPropWithSize(start, "md") ||
              getPropWithSize(start, "lg") ||
              getPropWithSize(start, "xl")} / `
          : ""
      } span ${md || lg || xl}
    }
    `
         : ""
     }
     
     ${
       sm || md || lg || xl
         ? `
    ${theme.mobile} {
      grid-column: ${
        getPropWithSize(start, "sm") ||
        getPropWithSize(start, "md") ||
        getPropWithSize(start, "lg") ||
        getPropWithSize(start, "xl")
          ? `${getPropWithSize(start, "sm") ||
              getPropWithSize(start, "md") ||
              getPropWithSize(start, "lg") ||
              getPropWithSize(start, "xl")} / `
          : ""
      } span ${sm || md || lg || xl}
    }
    `
         : ""
     }
    `}
`;

const Box: React.FC<BoxProps> = props => <StyledBox {...props} />;

export default Box;
