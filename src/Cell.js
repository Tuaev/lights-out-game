import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  // Listen to click and handle the event
  handleClick = e => {};

  render() {
    const cellClass = this.props.cellState === true ? 'cellOn' : 'cellOff';
    return <td className={cellClass} onClick={this.handleClick} />;
  }
}

export default Cell;
