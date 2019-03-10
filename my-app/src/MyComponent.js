import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyComponent extends React.Component {
  num = 10;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/fetchrecords?number=" + this.num)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Subscribers</th>
            </tr>
          </thead>

          <tbody >
            {items.map(item => (

              <tr key={item.Rank}>
                <th>{item.Rank} </th>
                <th>{item["Channel name"]}</th>
                <th>{item.Grade}</th>
                <th>{item.Subscribers}</th>
              </tr>
            ))}
          </tbody>

        </table>
      );
    }
  }
}

export default MyComponent;