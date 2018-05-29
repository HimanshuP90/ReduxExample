import React, { Component } from 'react';
import logo from './logo.svg';
import redux from './redux.svg';

import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={redux} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React & Redux Application</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
