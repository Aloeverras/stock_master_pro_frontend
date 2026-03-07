import React from "react"

type ThemeType = "light" | "medium" | "dark";
type ThemeContextType = (theme : ThemeType) => React.Context<ThemeType>

const ThemeContext : ThemeContextType = (theme : ThemeType = "light")  => {
    if (
        theme === "light"
        ||
        theme === "medium"
        ||
        theme === "dark"
    ) {
        return React.createContext(theme);
    } else {
        throw new Error(`${theme} is not correct`);
    }
};

export default ThemeContext;