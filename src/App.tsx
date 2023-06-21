import React from "react";
import Block from "./components/block";

export default class App extends React.Component {
  state = {
    value: new Array(9).fill(null),
    current: "X",
    game: true,
  };
  checkWinner = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (
        this.state.value[a] !== null &&
        this.state.value[a] === this.state.value[b] &&
        this.state.value[a] === this.state.value[c]
      ) {
        return true;
      }
    }
    return false;
  };

  handleBlockClick = (index: number) => {
    let currentTurn = this.state.current;
    let state = this.state.value;

    if (state[index] !== null) return;

    if (this.state.game) {
      this.setState({ current: currentTurn === "X" ? "O" : "X" });
      state[index] = currentTurn;
      //   console.log(currentTurn);
    }
  };

  resetGame = () => {
    return window.location.reload();
  };

  checkwin = () => {
    const win = this.checkWinner();
    if (win) {
      this.state.game = false;
      let value = this.state.current === "X" ? "O" : "X";
      return <p>{value} is winner 🏆</p>;
    }
  };

  render() {
    return (
      <div>
        <div className="board">
          <div className="row">
            <Block
              onClick={() => this.handleBlockClick(0)}
              value={this.state.value[0]}
            />
            <Block
              onClick={() => this.handleBlockClick(1)}
              value={this.state.value[1]}
            />
            <Block
              onClick={() => this.handleBlockClick(2)}
              value={this.state.value[2]}
            />
          </div>
          <div className="row">
            <Block
              onClick={() => this.handleBlockClick(3)}
              value={this.state.value[3]}
            />
            <Block
              onClick={() => this.handleBlockClick(4)}
              value={this.state.value[4]}
            />
            <Block
              onClick={() => this.handleBlockClick(5)}
              value={this.state.value[5]}
            />
          </div>
          <div className="row">
            <Block
              onClick={() => this.handleBlockClick(6)}
              value={this.state.value[6]}
            />
            <Block
              onClick={() => this.handleBlockClick(7)}
              value={this.state.value[7]}
            />
            <Block
              onClick={() => this.handleBlockClick(8)}
              value={this.state.value[8]}
            />
          </div>
        </div>
        <p>{this.checkwin()}</p>
        <button onClick={this.resetGame}>Reset</button>
      </div>
    );
  }
}
