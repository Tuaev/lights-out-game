import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  // Listen to click and handle the event
  handleClick = e => {
    console.log(e);
    console.log('clicked', e.key);
  };

  render() {
    const cellClass = 'Cell' + (this.props.cellState ? ' Cell-On' : '');
    return <td className={cellClass} onClick={this.handleClick} />;
  }
}

export default Cell;
