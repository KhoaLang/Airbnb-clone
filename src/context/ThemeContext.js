import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState({
    isDarkTheme: false,
    darkThemeStyle: {
      backgroundColor: "#1e1e38",
      color: "#fff",
    },
    exploreItemHover: {
      backgroundColor: "#111122",
    },
    darkThemeAdvanceSearchStyle: {
      backgroundColor: "#111122",
      color: "#fff",
      fontColor: "#fff",
    },
  });

  const changeTheme = () => {
    setDarkTheme({ ...darkTheme, isDarkTheme: !darkTheme.isDarkTheme });
  };

  const contextData = {
    darkTheme,
    changeTheme,
  };
  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
