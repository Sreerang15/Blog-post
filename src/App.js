import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes/Routes";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes history={history} />
      </BrowserRouter>
    );
  }
}

export default App;
