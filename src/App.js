import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./components/header/Header";

import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Photo from "./components/photo/Photo";
import Video from "./components/video/Video";
import Documents from "./components/documents/Documents";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
            <Header />

            <Route exact path="/" component={Home} />
            <Route exact path="/photo" component={Photo} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/documents" component={Documents} />
            <Route exact path="/about" component={About} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
