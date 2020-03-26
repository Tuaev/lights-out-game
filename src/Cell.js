import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  // Listen to click and handle the event
  handleClick = e => {
    this.props.flipCells();
  };

  render() {
    const cellClass = 'Cell' + (this.props.cellState ? ' Cell-On' : '');
    return <td className={cellClass} onClick={this.handleClick} />;
  }
}

export default Cell;
