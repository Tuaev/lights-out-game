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
    nCols: 5
  };

  state = {
    hasWon: false,
    board: 0
  };

  createBoard = () => {
    const newBoard = Array(this.props.nRows)
      .fill(false)
      .map(() => Array(this.props.nCols).fill(false));
    console.log(newBoard);
    return this.setState({
      hasWon: false,
      board: newBoard
    });
  };

  // TODO: Handle changing cells and update the board

  // Function to check coordinate of click cell and determine if the cell is on of off
  // Turn on/off surround cells
  // Check if user has won by determining if all cells are off

  render() {
    return (
      <div>
        <button onClick={this.createBoard}> rows</button>
        <h1>{this.props.nCols} Cols</h1>

        {/* Game board should look like this */}
        <table>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
