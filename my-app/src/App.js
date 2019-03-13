import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {

  value = 0;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Top You tube channels
        </header>
        <div>
          <MyComponent num="10" />
        </div>
      </div >

    );
  }
}


export default App;
