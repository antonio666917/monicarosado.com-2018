import React, { Component } from "react";
import typography from "./utils/typography";
import Home from "./components/Home";
import Menu from "./components/Menu";

typography.injectStyles();

class App extends Component {
  render() {
    return <Home />;
  }
}

export default App;
