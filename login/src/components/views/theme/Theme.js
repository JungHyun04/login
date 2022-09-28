import React from "react";

const defaultState = {
  theme: null,
  setTheme: () => {},
};

const ThemeContext = React.createContext(defaultState);

export class ThemeProvider extends React.Component {
  state = {
    theme: null,
  };

  setTheme = (theme) => {
    document.body.className = theme;

    localStorage.setItem("theme", theme);
    this.setState({ theme });
  };

  componentDidMount() {
    this.setTheme(localStorage.getItem("theme") || "light");
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          theme,
          setTheme: this.setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;
