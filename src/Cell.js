import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  // Listen to click and handle the event
  handleClick = e => {};

  render() {
    return <td onClick={this.handleClick} />;
  }
}

export default Cell;
