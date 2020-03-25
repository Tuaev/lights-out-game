import React, { Component } from 'react';
import Cell from './Cell';

/** Game Board
 *
 * Setting props and state used for the app
 * Creating the board and
 * rendering individual <Cell /> components
 *
 */

class Board extends Component {
  static defaultProps = {
    nRows: 5,
    nCols: 5
  };

  state = {
    hasWon: false,
    board: []
  };

  createBoard = () => {
    const newBoard = Array(this.props.nRows)
      .fill('.')
      .map(() => Array(this.props.nCols).fill('.'));
    console.log(newBoard);
    return this.setState({
      hasWon: false,
      board: newBoard
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.createBoard}> rows</button>
        <h1>{this.props.nCols} Cols</h1>
        <Cell />
      </div>
    );
  }
}

export default Board;
