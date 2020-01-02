const color = {
  primary: "#EF6F35",
  mango: "#EFAD53",
  blueberry: "#334897",
  charcoal: "#333333",
  grapefruitLight: "#FDEBE0",
  oatLight: "#F9EEE5",
  sand: "#FFF9F0",
  rule: "#E6E6E6"
};

const size = {
  desktop: "@media (max-width: 1920px)",
  smallDesktop: "@media (max-width: 1441px)",
  tablet: "@media (max-width: 769px)",
  mobile: "@media (max-width: 600px)"
};

const font = {
  primaryFont: "Montserrat",
  secondaryFont: "Work Sans"
};

const globalClass = `
  .v-center {
    display: flex;
    flex-direction: column;
    align-items:center;
  }
  .h-center {
    display: flex;
    justify-content: center;
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
  }
`;

const reset = `
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  box-sizing: border-box;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  font-family: ${font.secondaryFont}, system-ui;
  overflow-x: hidden;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
  q:before, q:after {
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  background-color: transparent;
  color: #000;
  text-decoration: none;
}

summary {
  ::-webkit-details-marker {
    display: none;
  }
  
   :focus {
    outline: none;
  }
}

img {
  object-fit: cover;
  vertical-align: bottom;
}

p, span {
  font-size: 15px;
  line-height: 22px;
  color: ${color.charcoal};
}

[hidden]{
  display:none !important;
}

.primary-font {
  font-family: ${font.primaryFont};
}

.slick-dots {
  
  .slick-active {
    background-color: ${color.primary};
  }
  li {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 7px;
    padding: 0;
    cursor: pointer;
    border: 1px solid ${color.primary};
    border-radius: 50%;
    
    button {
      display: none;
    }
  }
}

${globalClass}

`;

const functions = {
  ellipsis: (line: number): string => `
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical
`
};

export default {
  ...color,
  ...size,
  ...font,
  ...functions,
  reset
};
