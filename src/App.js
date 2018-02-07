import React, { Component } from "react";
import typography from "./utils/typography";
import Home from "./components/Home";

typography.injectStyles();

class App extends Component {
  render() {
    return <Home />;
  }
}

export default App;
