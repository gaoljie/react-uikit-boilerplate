import React from "react";

export const theme = {
  primary: "#EF6F35",
  primaryFont: "Montserrat",
  secondaryFont: "Work Sans",
  desktop: "@media (max-width: 1920px)",
  smallDesktop: "@media (max-width: 1441px)",
  tablet: "@media (max-width: 769px)",
  mobile: "@media (max-width: 600px)"
};

export const ThemeContext = React.createContext(theme);

export const ThemeProvider = ThemeContext.Provider;
