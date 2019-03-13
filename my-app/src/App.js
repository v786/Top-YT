import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {

  value = 0;

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.value = this.state.value;
    event.preventDefault();
    ReactDOM.render(<MyComponent num={this.state.value} />, document.getElementById("api"));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Top You tube channels
        </header>
        <div className="col">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Number of records"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit" value="Submit">Go</button>
              </div>
            </div>
          </form>
        </div>
        <div id="api">

        </div>
      </div >

    );
  }
}


export default App;
