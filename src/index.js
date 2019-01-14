import React, { Component } from "react";
import ReactDOM from 'react-dom';
import TestComponent from 'gpservices/components/index.js';

class App extends Component {
  render() {
    return (
      <TestComponent/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("App"));
