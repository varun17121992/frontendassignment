import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import "./components/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <Main />
      </div>
    );
  }
}

export default App;
