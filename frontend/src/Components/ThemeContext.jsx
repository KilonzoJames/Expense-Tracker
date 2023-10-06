import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export const ThemeContext = React.createContext({});

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
ThemeProvider.propTypes = {
    children: PropTypes.node,
  };