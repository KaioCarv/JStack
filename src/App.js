import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";

import themes from "./styles/themes";

class App extends React.Component {
  state = {
    changed: false,
  };

  // componentDidMount() {
  //   console.log("aaaaaaaaaaaaaaaaaa");
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("componentDidUpdate", {
  //     currentState: this.state,
  //     prevState,
  //     prevProps,
  //   });
  // }

  // componentDidCatch(error, info) {
  //   console.log("componetdidcatch", { error, info });
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate", {
  //     currentState: this.state,
  //     nextState,
  //     nextProps,
  //   });
  //   return false;
  // }

  render() {
   

    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, handleToggleTheme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />

              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
