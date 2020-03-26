import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

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
    nCols: 5,
    chanceLightsStartOn: 0.25
  };

  state = {
    hasWon: false,
    board: this.createBoard()
  };

  createBoard() {
    const board = [];

    for (let i = 0; i < this.props.nRows; i++) {
      let row = [];
      for (let j = 0; j < this.props.nCols; j++) {
        row.push(Math.random() < this.props.chanceLightsStartOn);
      }
      board.push(row);
    }

    return board;
  }

  // TODO: Handle changing cells and update the board

  // Function to check coordinate of click cell and determine if the cell is on of off
  // Turn on/off surround cells
  // Check if user has won by determining if all cells are off

  render() {
    const tableBoard = [];
    for (let i = 0; i < this.props.nRows; i++) {
      let row = [];
      for (let j = 0; j < this.props.nCols; j++) {
        row.push(<Cell cellState={this.state.board[i][j]} />);
      }
      tableBoard.push(<tr>{row}</tr>);
    }
    return (
      <table className="Board">
        <tbody>{tableBoard}</tbody>
      </table>
    );
  }
}

export default Board;
