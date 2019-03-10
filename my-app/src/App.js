import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Top You tube channels
        </header>
        <div className="col">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Number of records" />
            <div className="input-group-append">
              <button className="btn btn-success" type="submit">Go</button>
            </div>
          </div>
        </div>
        <div id="api"></div>
      </div>

    );
  }
}

export default App;
