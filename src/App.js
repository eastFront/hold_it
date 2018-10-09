import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/Header";

import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  }
}

export default App;
