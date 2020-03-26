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

  // Function to check coordinate of click cell and determine if the cell is on of off
  // Turn on/off surround cells
  // Check if user has won by determining if all cells are off
  flipCell = coord => {
    const { nCols, nRows } = this.props;
    const board = this.state.board;
    const [y, x] = coord.split('-').map(Number);

    function flipCell(y, x) {
      // if cell exists on board, flip it
      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);

    // Checking if every cell in every row is false.
    const hasWon = board.every(row => row.every(cell => !cell));

    this.setState({ board: board, hasWon: hasWon });
  };

  // Seperate method to render the board on start up
  createTable = () => {
    const tableBoard = [];
    for (let i = 0; i < this.props.nRows; i++) {
      let row = [];
      for (let j = 0; j < this.props.nCols; j++) {
        let coord = `${i}-${j}`;
        row.push(
          <Cell
            key={coord}
            cellState={this.state.board[i][j]}
            flipCells={() => this.flipCell(coord)}
          />
        );
      }
      tableBoard.push(<tr key={i}>{row}</tr>);
    }
    return (
      <table className="Board">
        <tbody>{tableBoard}</tbody>
      </table>
    );
  };

  render() {
    return (
      <div>
        {/* Check to see if user has won or not */}
        {this.state.hasWon ? (
          <div className="Winner">
            <span className="neon">YOU</span>
            <span className="flux">WIN</span>
          </div>
        ) : (
          <div>
            <div className="Board-Title">
              <div className="neon">Lights</div>
              <div className="flux">Out</div>
            </div>
            {this.createTable()}
          </div>
        )}
      </div>
    );
  }
}

export default Board;
