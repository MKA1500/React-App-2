import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import BookList from './containers/book_list';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BookList />
      </div>
    );
  }
}

export default App;
